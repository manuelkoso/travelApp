package it.units.backend.database;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySqlConnector implements DBConnector {

    final static private String connectionString = "jdbc:mysql://localhost:3306/travel_app?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&jdbcCompliantTruncation=false";
    final static private String usernameDB = "root";
    final static private String passwordDB = "comp55datIncredibile";
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

        }

        /*
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            this.connection = DriverManager.getConnection(connectionString, usernameDB, passwordDB);
        } catch (ClassNotFoundException | SQLException e) {
            System.err.println(e);
        }
         */
        return connection;
    }

}
