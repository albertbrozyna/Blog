package org.app.springapp.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "persons")
public class Person {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;

    public Person(String lastName, String email, String firstName) {
        this.lastName = lastName;
        this.email = email;
        this.firstName = firstName;
    }
}
