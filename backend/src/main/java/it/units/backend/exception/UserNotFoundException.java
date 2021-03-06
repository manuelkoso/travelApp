package it.units.backend.exception;

/*
Credits to https://github.com/maltesander/rest-jersey2-json-jwt-authentication
 */

public class UserNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -8078059893066017473L;
	
	public UserNotFoundException( String user ) {
		super("User not found: " + user );
	}
	
}
