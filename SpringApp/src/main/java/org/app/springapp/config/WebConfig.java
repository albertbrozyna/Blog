package org.app.springapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Dotyczy wszystkich endpointów
                .allowedOrigins("*") // Pozwala na wszystkie źródła
                .allowedMethods("*") // Pozwala na wszystkie metody (GET, POST itd.)
                .allowedHeaders("*"); // Pozwala na wszystkie nagłówki
    }
}
