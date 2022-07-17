package it.units.backend.restapi;

/*
Credits to https://github.com/maltesander/rest-jersey2-json-jwt-authentication
 */

import it.units.backend.filter.AuthenticationFilter;
import org.glassfish.jersey.server.ResourceConfig;

public class RestApplicationConfig extends ResourceConfig {

    public RestApplicationConfig() {
        packages( "it.units.backend.filter" );
        register( AuthenticationFilter.class );
    }
}
