package org.app.springapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Dotyczy wszystkich endpointów
                .allowedOrigins("http://localhost:80", "http://nginx_frontend:80","http://localhost:80")
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Dozwolone metody
                .allowedHeaders("*") // Akceptowanie wszystkich nagłówków
                .allowCredentials(true); // Zezwolenie na ciasteczka
    }
}
