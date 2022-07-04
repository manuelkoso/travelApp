package it.units.backend.restapi;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.security.DeclareRoles;
import javax.annotation.security.PermitAll;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import it.units.backend.database.MySqlUserQueryManager;
import it.units.backend.database.UserQueryManager;
import it.units.backend.exception.UserExistingException;
import it.units.backend.exception.UserNotFoundException;
import it.units.backend.filter.AuthenticationFilter;
import it.units.backend.model.Credentials;
import it.units.backend.model.User;
import it.units.backend.security.PasswordSecurity;
import it.units.backend.security.TokenSecurity;
import org.glassfish.jersey.server.ResourceConfig;

@DeclareRoles({"user"})
@Path("/user")
public class UserRestService extends ResourceConfig {

    @POST
    @Path("/create")
    @PermitAll
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(User user) {

        UserQueryManager userQueryManager = new MySqlUserQueryManager();

        try {
            try {
                userQueryManager.getUserByUsername(user.getUsername());
                throw new UserExistingException(user.getUsername());
            } catch (UserNotFoundException e) {
                // store plain password
                String plainPassword = user.getPassword();
                // generate password
                user.setPassword(PasswordSecurity.generateHash(user.getPassword()));
                // create user
                userQueryManager.addUser(user);
                // authenticate user
                return authenticate(new Credentials(user.getUsername(), plainPassword));
            }
        } catch (UserExistingException e) {
            return ResponseBuilder.createResponse(Response.Status.CONFLICT, e.getMessage());
        } catch (Exception e) {
            return ResponseBuilder.createResponse(Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @POST
    @Path("/authenticate")
    @PermitAll
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response authenticate(Credentials credentials) {

        UserQueryManager userQueryManager = new MySqlUserQueryManager();

        try {
            User user = userQueryManager.getUserByUsername(credentials.getUsername());

            if (!PasswordSecurity.validatePassword(credentials.getPassword(), user.getPassword())) {
                return ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED);
            }

            String token = TokenSecurity.generateJwtToken(user.getId());
            userQueryManager.updateUserToken(user.getId(), token);

            Map<String, Object> map = new HashMap<String, Object>();
            map.put(AuthenticationFilter.AUTHORIZATION_PROPERTY, token);

            return ResponseBuilder.createResponse(Response.Status.OK, map);
        } catch (UserNotFoundException e) {
            return ResponseBuilder.createResponse(Response.Status.NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            return ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED);
        }

    }

}
