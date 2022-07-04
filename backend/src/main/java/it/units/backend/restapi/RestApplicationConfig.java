package it.units.backend.restapi;

import it.units.backend.filter.AuthenticationFilter;
import org.glassfish.jersey.server.ResourceConfig;

public class RestApplicationConfig extends ResourceConfig {

    public RestApplicationConfig() {
        packages( "it.units.backend.filter" );
        register( AuthenticationFilter.class );
    }
}
