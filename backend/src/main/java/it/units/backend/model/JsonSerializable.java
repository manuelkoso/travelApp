package it.units.backend.model;

/*
Credits to https://github.com/maltesander/rest-jersey2-json-jwt-authentication
 */

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public interface JsonSerializable {
	public JSONObject toJson() throws JSONException;
}
