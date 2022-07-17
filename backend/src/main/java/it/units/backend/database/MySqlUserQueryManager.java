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

    private String sqlQueryString;

    @Override
    public User getUserById(String userId) throws UserNotFoundException {

        User queriedUser = null;
        sqlQueryString = "SELECT * FROM User WHERE id=?";

        try (PreparedStatement preparedStatement = mySqlConnection.prepareStatement(sqlQueryString)) {

            preparedStatement.setString(1, userId);
            ResultSet rs = preparedStatement.executeQuery();

            if (rs.next()) {
                queriedUser = new User(userId, rs.getString("username"), rs.getString("password"), rs.getString("email"), rs.getString("token"));
            } else {
                throw new UserNotFoundException(userId);
            }

        } catch (SQLException ex) {
            System.err.println(ex);
        }
        return queriedUser;
    }

    @Override
    public User getUserByUsername(String username) throws UserNotFoundException {

        sqlQueryString = "SELECT * FROM User WHERE username=?";
        User user = null;
        ResultSet rs = null;

        try (PreparedStatement preparedStatement = mySqlConnection.prepareStatement(sqlQueryString)) {
            preparedStatement.setString(1, username);
            rs = preparedStatement.executeQuery();
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
        }
        return user;
    }

    @Override
    public void addUser(User user) throws UserExistingException {

        sqlQueryString = "INSERT INTO User(username,password,email) VALUES(?,?,?)";
        try (PreparedStatement preparedStatement = mySqlConnection.prepareStatement(sqlQueryString)) {
            try {
                if (this.getUserByUsername(user.getUsername()) != null) {
                    throw new UserExistingException(user.getUsername());
                }
            } catch (UserNotFoundException e) {
                preparedStatement.setString(3, user.getEmail());
                preparedStatement.setString(2, user.getPassword());
                preparedStatement.setString(1, user.getUsername());
                preparedStatement.executeUpdate();
            }
        } catch (SQLException e) {
            System.err.println(e);
        }
    }

    @Override
    public void updateUserToken(String userId, String token) {

        sqlQueryString = "UPDATE User SET token=? WHERE id=?";

        try (PreparedStatement preparedStatement = mySqlConnection.prepareStatement(sqlQueryString)) {
            preparedStatement.setString(2, userId);
            preparedStatement.setString(1, token);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            System.err.println(e);
        }
    }

}
