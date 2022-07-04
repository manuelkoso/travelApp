package it.units.backend.database;

import it.units.backend.model.Travel;

import java.util.Date;
import java.util.List;

public interface TravelQueryManager {

    void addTravel(Travel travel);

    List<Travel> getTravels(String userId, Date date);

    List<Travel> getTravels(String userId);

    void modifyTravel(Travel travel);

}
