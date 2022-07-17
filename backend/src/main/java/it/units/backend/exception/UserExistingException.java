package it.units.backend.exception;

/*
Credits to https://github.com/maltesander/rest-jersey2-json-jwt-authentication
 */
public class UserExistingException extends RuntimeException {
	
	private static final long serialVersionUID = 2481381224355081751L;

	public UserExistingException( String user ) {
		super( "User already registered: " + user );
	}
}
