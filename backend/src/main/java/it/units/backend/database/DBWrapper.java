package it.units.backend.database;

import it.units.backend.exception.UserExistingException;
import it.units.backend.exception.UserNotFoundException;
import it.units.backend.model.Travel;
import it.units.backend.model.User;

import java.util.Date;
import java.util.List;

public interface DBWrapper {

    User getUserById(String id) throws UserNotFoundException;

    User getUserByUsername(String username) throws UserNotFoundException;

    void updateUserToken(String userId, String token);
    
    void addUser(User user) throws UserExistingException;

    void addTravel(Travel travel);

    List<Travel> getTravels(String userId, Date date);
    
    List<Travel> getTravels(String userId);

    void modifyTravel(Travel travel);

}
