package it.units.backend.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import it.units.backend.exception.UserExistingException;
import it.units.backend.exception.UserNotFoundException;
import it.units.backend.model.Travel;
import it.units.backend.model.User;

public class MySqlWrapper implements DBWrapper {

    private static MySqlWrapper instance = null;
    private Connection connection;
    final static private String connectionString = "jdbc:mysql://localhost:3306/travel_app?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&jdbcCompliantTruncation=false";
    final static private String usernameDB = "root";
    final static private String passwordDB = "comp55datIncredibile";

    private MySqlWrapper() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            this.connection = DriverManager.getConnection(connectionString, usernameDB, passwordDB);
        } catch (ClassNotFoundException | SQLException e) {
            System.err.println(e);
        }
    }

    public static MySqlWrapper getInstance() {
        if (instance == null) {
            instance = new MySqlWrapper();
        }
        return instance;
    }

    @Override
    public User getUserById(String id) throws UserNotFoundException {

        String sql = "SELECT * FROM User WHERE id=?";
        User user = null;
        ResultSet rs = null;
        PreparedStatement ps = null;

        try {
            ps = this.connection.prepareStatement(sql);
            ps.setString(1, id);
            rs = ps.executeQuery();
            if (rs.next()) {
                String username = rs.getString("username");
                String password = rs.getString("password");
                String email = rs.getString("email");
                String token = rs.getString("token");
                user = new User(id, username, password, email, token);
            } else {
                throw new UserNotFoundException(id);
            }
        } catch (SQLException ex) {
            System.err.println(ex);
        } finally {
            try {
                rs.close();
                ps.close();
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
        return user;
    }

    @Override
    public User getUserByUsername(String username) throws UserNotFoundException {

        String sql = "SELECT * FROM User WHERE username=?";
        User user = null;
        ResultSet rs = null;
        PreparedStatement ps = null;

        try {
            ps = this.connection.prepareStatement(sql);
            ps.setString(1, username);
            rs = ps.executeQuery();
            String id = null;
            if (rs.next()) {
                id = rs.getString("id");
                String password = rs.getString("password");
                String email = rs.getString("email");
                String token = rs.getString("token");
                user = new User(id, username, password, email, token);
            } else {
                throw new UserNotFoundException(id);
            }
        } catch (SQLException ex) {
            System.err.println(ex);
        } finally {
            try {
                rs.close();
                ps.close();
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
        return user;
    }

    @Override
    public void addTravel(Travel travel) {

        String sql = "INSERT INTO Travel(id_user,route,stages,date,vehicle) VALUES (?,?,?,?,?)";
        PreparedStatement stmt = null;

        //Add one day
        Calendar c = Calendar.getInstance();
        c.setTime(travel.getDate());
        c.add(Calendar.DATE, 1);
        travel.setDate(c.getTime());

        try {
            stmt = this.connection.prepareStatement(sql);
            stmt.setString(5, travel.getVehicle());
            stmt.setDate(4, new java.sql.Date(travel.getDate().getTime()));
            stmt.setString(3, travel.getPointsOfStages().toString());
            stmt.setString(2, travel.getPointsOfRoute().toString());
            stmt.setString(1, travel.getUserdId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            System.err.println(e);
        } finally {
            try {
                stmt.close();
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
    }

    
    @Override
    public List<Travel> getTravels(String userId) {
        
        String sql = "SELECT id, route, stages, date, vehicle from Travel WHERE id_user=?";
        PreparedStatement stmt = null;
        ResultSet rs;
        Matcher matcher;
        Pattern pattern;
        String regex;
        List travels = new ArrayList<Travel>();

        try {
            stmt = this.connection.prepareStatement(sql);
            stmt.setString(1, userId);
            rs = stmt.executeQuery();
            regex = "(\\[\\-?\\d*.\\d*, \\-?\\d*.\\d*\\])";
            pattern = Pattern.compile(regex);
            while (rs.next()) {
                List pointsOfRoute = new ArrayList<>();
                List pointsOfStages = new ArrayList<>();
                String vehicle = rs.getString("vehicle");
                Date date = rs.getDate("date");
                matcher = pattern.matcher(rs.getString("route"));
                while (matcher.find()) {
                    pointsOfRoute.add(matcher.group(1));
                }
                matcher = pattern.matcher(rs.getString("stages"));
                while (matcher.find()) {
                    pointsOfStages.add(matcher.group(1));
                }
                String id = rs.getString("id");
                travels.add(new Travel(id, userId, date, vehicle, pointsOfRoute, pointsOfStages));
            }
        } catch (SQLException e) {
            System.err.println(e);
        } finally {
            try {
                stmt.close();
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
        return travels;
    }
    
       
    @Override
    public List<Travel> getTravels(String userId, Date date) {

        String sql = "SELECT id, route, stages, vehicle from Travel WHERE id_user=? AND date=?";
        PreparedStatement stmt = null;
        ResultSet rs;
        Matcher matcher;
        Pattern pattern;
        String regex;
        List<Travel> travels = new ArrayList<>();

        try {
            stmt = this.connection.prepareStatement(sql);
            stmt.setString(1, userId);
            stmt.setDate(2, new java.sql.Date(date.getTime()));
            rs = stmt.executeQuery();
            regex = "(\\[\\-?\\d*.\\d*, \\-?\\d*.\\d*\\])";
            pattern = Pattern.compile(regex);
            while (rs.next()) {
                List pointsOfRoute = new ArrayList<>();
                List pointsOfStages = new ArrayList<>();
                String vehicle = rs.getString("vehicle");
                matcher = pattern.matcher(rs.getString("route"));
                while (matcher.find()) {
                    pointsOfRoute.add(matcher.group(1));
                }
                matcher = pattern.matcher(rs.getString("stages"));
                while (matcher.find()) {
                    pointsOfStages.add(matcher.group(1));
                }
                String id = rs.getString("id");
                travels.add(new Travel(id, vehicle, pointsOfRoute, pointsOfStages));
            }
        } catch (SQLException e) {
            System.err.println(e);
        } finally {
            try {
                stmt.close();
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
        return travels;
    }

    @Override
    public void modifyTravel(Travel travel) {

        String sql = "UPDATE Travel SET route=?,stages=?,date=?,vehicle=? WHERE id=?";
        PreparedStatement ps = null;
        //Add one day
        Calendar c = Calendar.getInstance();
        c.setTime(travel.getDate());
        c.add(Calendar.DATE, 1);
        travel.setDate(c.getTime());
        
        try {
            ps = this.connection.prepareStatement(sql);
            ps.setString(1, travel.getPointsOfRoute().toString());
            ps.setString(2, travel.getPointsOfStages().toString());
            ps.setDate(3, new java.sql.Date(travel.getDate().getTime()));
            ps.setString(4, travel.getVehicle());
            ps.setString(5, travel.getId());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.err.println(e);
        } finally {
            try {
                ps.close();
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
    }

    @Override
    public void addUser(User user) throws UserExistingException {

        String sql = "INSERT INTO User(username,password,email) VALUES(?,?,?)";
        PreparedStatement stmt = null;
        try {
            try {
                if (this.getUserByUsername(user.getUsername()) != null) {
                    throw new UserExistingException(user.getUsername());
                }
            } catch (UserNotFoundException e) {
            }
            stmt = this.connection.prepareStatement(sql);
            stmt.setString(3, user.getEmail());
            stmt.setString(2, user.getPassword());
            stmt.setString(1, user.getUsername());
            stmt.executeUpdate();
        } catch (SQLException e) {
            System.err.println(e);
        } finally {
            try {
                stmt.close();
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
    }

    @Override
    public void updateUserToken(String userId, String token) {

        String sql = "UPDATE User SET token=? WHERE id=?";
        PreparedStatement ps = null;

        try {
            ps = this.connection.prepareStatement(sql);
            ps.setString(2, userId);
            ps.setString(1, token);
            ps.executeUpdate();
        } catch (SQLException e) {
            System.err.println(e);
        } finally {
            try {
                ps.close();
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
    }

}
