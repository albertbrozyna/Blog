package org.app.springapp.controller;

import org.app.springapp.model.Person;
import org.app.springapp.service.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/persons")
    public List<Person> getAllPersons() {
        return personService.getAllPersons();
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Person person) {

        //Checking if user exists
        if(personService.getPersonByEmail(person.getEmail()).isPresent()) {
            return new ResponseEntity<>("Error: Email is already in use",HttpStatus.CONFLICT);
        }

        //Adding person to database
        try {
            personService.savePerson(person);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Person> loginUser(@RequestBody Person person) {
        List<Person> persons = personService.getAllPersons();

        for(Person p : persons) {
            if(p.getEmail().equals(person.getEmail()) && p.getPassword().equals(person.getPassword())) {
                p.setPassword(null);
                return new ResponseEntity<>(p, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/person")
    public Person addPerson(@RequestBody Person person) {
        return personService.savePerson(person);
    }
}
