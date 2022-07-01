package it.units.backend.restapi;

import java.util.Date;
import java.util.List;
import javax.annotation.security.DeclareRoles;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import it.units.backend.database.DBWrapper;
import it.units.backend.database.MySqlWrapper;
import it.units.backend.exception.UserNotFoundException;
import it.units.backend.filter.AuthenticationFilter;
import it.units.backend.model.Travel;
import org.glassfish.jersey.server.ResourceConfig;

@DeclareRoles({"user"})
@Path("/travel")
public class TravelRestService extends ResourceConfig {

    @PUT
    @Path("/add")
    @RolesAllowed({"user"})
    @Consumes(MediaType.APPLICATION_JSON)
    public Response add(@Context HttpHeaders headers, String travelString) {

        DBWrapper dBWrapper = MySqlWrapper.getInstance();
        Travel travel = new Gson().fromJson(travelString, Travel.class);

        try {
            String userId = headers.getRequestHeader(AuthenticationFilter.HEADER_PROPERTY_ID).get(0);
            travel.setUserdId(userId);
            dBWrapper.addTravel(travel);
            return ResponseBuilder.createResponse(Response.Status.OK);
        } catch (UserNotFoundException e) {
            return ResponseBuilder.createResponse(Response.Status.NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            return ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED);
        }
    }

    @GET
    @Path("/get/")
    @RolesAllowed({"user"})
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTravels(@Context HttpHeaders headers) {
        System.out.println("miao");
        DBWrapper dBWrapper = MySqlWrapper.getInstance();
        
        try {
            String userId = headers.getRequestHeader(AuthenticationFilter.HEADER_PROPERTY_ID).get(0);
            List travels = dBWrapper.getTravels(userId);
            String travelsJson = new Gson().toJson(travels);
            return ResponseBuilder.createResponse(Response.Status.OK, travelsJson);
        } catch (UserNotFoundException e) {
            return ResponseBuilder.createResponse(Response.Status.NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            return ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED);
        }
    }

    
    @GET
    @Path("/get/{dateEpoch}")
    @RolesAllowed({"user"})
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllTravels(@Context HttpHeaders headers, @PathParam("dateEpoch") long dateEpoch) {
        
        DBWrapper dBWrapper = MySqlWrapper.getInstance();
        
        try {
            String userId = headers.getRequestHeader(AuthenticationFilter.HEADER_PROPERTY_ID).get(0);
            List travels = dBWrapper.getTravels(userId, new Date(dateEpoch));
            String travelsJson = new Gson().toJson(travels);
            return ResponseBuilder.createResponse(Response.Status.OK, travelsJson);
        } catch (UserNotFoundException e) {
            return ResponseBuilder.createResponse(Response.Status.NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            return ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED);
        }
    }
    
    
    @PUT
    @Path("/modify")
    @RolesAllowed({"user"})
    @Consumes(MediaType.APPLICATION_JSON)
    public Response modifyTravel(@Context HttpHeaders headers, String travelString) {
        
        DBWrapper dBWrapper = MySqlWrapper.getInstance();
        Travel travel = new Gson().fromJson(travelString, Travel.class);
        
        try {
            String userId = headers.getRequestHeader(AuthenticationFilter.HEADER_PROPERTY_ID).get(0);
            travel.setUserdId(userId);
            dBWrapper.modifyTravel(travel);
            return ResponseBuilder.createResponse(Response.Status.OK);
        } catch (UserNotFoundException e) {
            return ResponseBuilder.createResponse(Response.Status.NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            return ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED);
        }
    }

}
