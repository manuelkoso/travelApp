package it.units.backend.filter;

/*
Credits to https://github.com/maltesander/rest-jersey2-json-jwt-authentication
 */

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Priority;
import javax.annotation.security.PermitAll;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import it.units.backend.database.MySqlUserQueryManager;
import it.units.backend.database.UserQueryManager;
import it.units.backend.exception.UserNotFoundException;
import it.units.backend.model.User;
import it.units.backend.restapi.ResponseBuilder;
import it.units.backend.security.TokenSecurity;
import org.jose4j.jwt.consumer.InvalidJwtException;

@Provider
@Priority(Priorities.AUTHENTICATION)
public class AuthenticationFilter implements javax.ws.rs.container.ContainerRequestFilter {

    @Context
    private ResourceInfo resourceInfo;

    public static final String HEADER_PROPERTY_ID = "id";
    public static final String AUTHORIZATION_PROPERTY = "x-access-token";

    private static final String ACCESS_REFRESH = "Token expired. Please authenticate again!";
    private static final String ACCESS_INVALID_TOKEN = "Token invalid. Please authenticate again!";
    private static final String ACCESS_DENIED = "Not allowed to access this resource!";

    @Override
    public void filter(ContainerRequestContext requestContext) {
        Method method = resourceInfo.getResourceMethod();
        // everybody can access (e.g. user/create or user/authenticate)
        if (!method.isAnnotationPresent(PermitAll.class)) {

            // get request headers to extract jwt token
            final MultivaluedMap<String, String> headers = requestContext.getHeaders();
            final List<String> authProperty = headers.get(AUTHORIZATION_PROPERTY);

            // block access if no authorization information is provided
            if (authProperty == null || authProperty.isEmpty()) {
                requestContext.abortWith(
                        ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED, ACCESS_DENIED)
                );
                return;
            }

            String userId;
            String jwt = authProperty.get(0);

            // try to decode the jwt - deny access if no valid token provided
            try {
                userId = TokenSecurity.validateJwtToken(jwt);
            } catch (InvalidJwtException e) {
                requestContext.abortWith(
                        ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED, ACCESS_INVALID_TOKEN)
                );
                return;
            }

            // check if token matches an user token (set in user/authenticate)
            UserQueryManager userQueryManager = new MySqlUserQueryManager();
            User user;
            
            try {
                user = userQueryManager.getUserById(userId);
            } catch (UserNotFoundException e) {
                requestContext.abortWith(
                        ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED, ACCESS_DENIED)
                );
                return;
            }

            // token does not match with token stored in database - enforce re authentication
            if (!user.getToken().equals(jwt)) {
                requestContext.abortWith(
                        ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED, ACCESS_REFRESH)
                );
                return;
            }

            // set header param id for user identification in rest service - do not decode jwt twice in rest services
            List<String> idList = new ArrayList<String>();
            idList.add(userId);
            headers.put(HEADER_PROPERTY_ID, idList);
        }
    }

}
