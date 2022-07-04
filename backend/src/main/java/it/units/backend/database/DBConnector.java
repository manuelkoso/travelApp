package it.units.backend.database;

public interface DBConnector<T> {
    T connect();
}
