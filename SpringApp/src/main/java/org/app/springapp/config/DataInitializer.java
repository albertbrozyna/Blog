package org.app.springapp.config;

import org.app.springapp.model.Person;
import org.app.springapp.repository.PersonRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(PersonRepository personRepository) {
        return args -> {
            personRepository.deleteAll(); // Optional: Clear existing data

            Person person1 = new Person("Doe", "john.doe@example.com", "John", "secret123");
            Person person2 = new Person("Smith", "jane.smith@example.com", "Jane", "pass456");
            Person person3 = new Person("Brown", "mike.brown@example.com", "Mike", "letmein");

            personRepository.save(person1);
            personRepository.save(person2);
            personRepository.save(person3);

            System.out.println("✅ Inserted test data into MongoDB");
        };
    }
}
