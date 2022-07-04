package it.units.backend.database;

import it.units.backend.exception.UserExistingException;
import it.units.backend.exception.UserNotFoundException;
import it.units.backend.model.User;

public interface UserQueryManager {

    User getUserById(String id) throws UserNotFoundException;

    User getUserByUsername(String username) throws UserNotFoundException;

    void updateUserToken(String userId, String token);

    void addUser(User user) throws UserExistingException;

}
