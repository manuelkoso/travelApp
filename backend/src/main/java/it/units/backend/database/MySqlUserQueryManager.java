package it.units.backend.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import it.units.backend.exception.UserExistingException;
import it.units.backend.exception.UserNotFoundException;
import it.units.backend.model.User;

public class MySqlUserQueryManager implements UserQueryManager {

    Connection mySqlConnection = new MySqlConnector().connect();

    @Override
    public User getUserById(String id) throws UserNotFoundException {

        String sql = "SELECT * FROM User WHERE id=?";
        User user = null;
        ResultSet rs = null;
        PreparedStatement ps = null;

        try {
            ps = mySqlConnection.prepareStatement(sql);
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
            ps = mySqlConnection.prepareStatement(sql);
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
            stmt = mySqlConnection.prepareStatement(sql);
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
            ps = mySqlConnection.prepareStatement(sql);
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
