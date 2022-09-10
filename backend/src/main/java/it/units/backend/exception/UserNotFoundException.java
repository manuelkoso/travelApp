package it.units.backend.exception;

/*
Credits to https://github.com/maltesander/rest-jersey2-json-jwt-authentication
 */

public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException( String user ) {
		super("User not found: " + user );
	}
	
}
