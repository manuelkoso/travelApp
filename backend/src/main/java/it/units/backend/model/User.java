package it.units.backend.model;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class User implements JsonSerializable {

    private String id = null;
    private String username = null;
    private String password = null;
    private String email = null;
    private String token = null;

    public User() {
    }

    public User(String id, String username, String password, String email, String token) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public JSONObject toJson() throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("email", this.email);
        jsonObject.put("username", this.username);
        return jsonObject;
    }

}
