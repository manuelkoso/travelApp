package it.units.backend.model;

/*
Credits to https://github.com/maltesander/rest-jersey2-json-jwt-authentication
 */

public class Credentials {
	private String username = null;
	private String password = null;
	
	public Credentials() {}
	
	public Credentials(String email, String password) {
		this.username = email;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
