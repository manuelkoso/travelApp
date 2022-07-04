package it.units.backend.database;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;

public class MySqlConnector implements DBConnector<Connection> {

    private Connection connection;

    @Override
    public Connection connect() {

        DataSource dataSource = null;

        try {
            Context context = new InitialContext();
            Context envContext = (Context) context.lookup("java:/comp/env");
            dataSource = (DataSource) envContext.lookup("jdbc/travel_app");
            connection = dataSource.getConnection();
        } catch (Exception e) {
            System.err.println(e);
        }
        return connection;
    }

}
