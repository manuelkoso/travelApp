package it.units.backend.database;

import it.units.backend.model.Travel;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class MySqlTravelQueryManager implements TravelQueryManager {

    private final Connection mySqlConnection = new MySqlConnector().connect();
    private String sqlQueryString;

    @Override
    public void addTravel(Travel travel) {

        sqlQueryString = "INSERT INTO Travel(id_user,route,stages,date,vehicle) VALUES (?,?,?,?,?)";

        Calendar c = Calendar.getInstance();
        c.setTime(travel.getDate());
        c.add(Calendar.DATE, 1);
        travel.setDate(c.getTime());

        try (PreparedStatement preparedStatement = mySqlConnection.prepareStatement(sqlQueryString)) {

            preparedStatement.setString(1, travel.getUserId());
            preparedStatement.setString(2, travel.getPointsOfRoute().toString());
            preparedStatement.setString(3, travel.getPointsOfStages().toString());
            preparedStatement.setDate(4, new java.sql.Date(travel.getDate().getTime()));
            preparedStatement.setString(5, travel.getVehicle());
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            System.err.println(e);
        }
    }

    @Override
    public List<Travel> getTravels(String userId, Date date) {

        sqlQueryString = "SELECT id, route, stages, vehicle from Travel WHERE id_user=? AND date=?";
        List<Travel> travels = new ArrayList<>();

        try (PreparedStatement preparedStatement = mySqlConnection.prepareStatement(sqlQueryString)) {

            preparedStatement.setString(1, userId);
            preparedStatement.setDate(2, new java.sql.Date(date.getTime()));
            ResultSet resultSet = preparedStatement.executeQuery();
            Pattern pattern = Pattern.compile("(\\[\\-?\\d*.\\d*, \\-?\\d*.\\d*\\])");

            while (resultSet.next()) {

                Matcher matcher;
                List<String> pointsOfRoute = new ArrayList<>();
                List<String> pointsOfStages = new ArrayList<>();

                matcher = pattern.matcher(resultSet.getString("route"));
                while (matcher.find()) {
                    pointsOfRoute.add(matcher.group(1));
                }

                matcher = pattern.matcher(resultSet.getString("stages"));
                while (matcher.find()) {
                    pointsOfStages.add(matcher.group(1));
                }

                travels.add(new Travel(resultSet.getString("id"), resultSet.getString("vehicle"), pointsOfRoute, pointsOfStages));
            }
        } catch (SQLException e) {
            System.err.println(e);
        }
        return travels;
    }

    @Override
    public void modifyTravel(Travel travel) {

        sqlQueryString = "UPDATE Travel SET route=?,stages=?,date=?,vehicle=? WHERE id=?";

        Calendar c = Calendar.getInstance();
        c.setTime(travel.getDate());
        c.add(Calendar.DATE, 1);
        travel.setDate(c.getTime());

        try (PreparedStatement preparedStatement = mySqlConnection.prepareStatement(sqlQueryString)) {

            preparedStatement.setString(1, travel.getPointsOfRoute().toString());
            preparedStatement.setString(2, travel.getPointsOfStages().toString());
            preparedStatement.setDate(3, new java.sql.Date(travel.getDate().getTime()));
            preparedStatement.setString(4, travel.getVehicle());
            preparedStatement.setString(5, travel.getId());
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            System.err.println(e);
        }

    }

    @Override
    public void deleteTravel(String travelId) {

        sqlQueryString = "DELETE from Travel WHERE id=?";

        try (PreparedStatement preparedStatement = mySqlConnection.prepareStatement(sqlQueryString)) {

            preparedStatement.setString(1, travelId);
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            System.err.println(e);
        }
    }

}
