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
    private String password;

    public Person(String lastName, String email, String firstName,String password) {
        this.lastName = lastName;
        this.email = email;
        this.firstName = firstName;
        this.password = password;
    }

    public Person(String email,String password){
        this.email = email;
        this.password = password;
    }

    public Person(){

    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }
}
