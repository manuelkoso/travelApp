package it.units.backend.database;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySqlConnector implements DBConnector {

    private Connection connection;

    private DataSource dataSource = null;

    @Override
    public Connection connect() {

        try {
            Context context = new InitialContext();
            Context envContext = (Context) context.lookup("java:/comp/env");
            this.dataSource = (DataSource) envContext.lookup("jdbc/travel_app");
            connection = dataSource.getConnection();
        } catch (Exception e) {
            System.err.println(e);
        }
        return connection;
    }

}
