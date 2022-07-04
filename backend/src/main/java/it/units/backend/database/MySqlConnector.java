package it.units.backend.database;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class MySqlConnector implements DBConnector<Connection> {
    private Connection connection;
    @Override
    public Connection connect() {

        try {
            Context context = new InitialContext();
            Context envContext = (Context) context.lookup("java:/comp/env");
            DataSource dataSource = (DataSource) envContext.lookup("jdbc/travel_app");
            connection = dataSource.getConnection();
        } catch (SQLException | NamingException e) {
            System.err.println(e);
        }
        return connection;
    }

}
