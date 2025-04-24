package org.app.springapp.service;

import org.app.springapp.model.Person;
import org.app.springapp.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    // Konstruktor z wstrzyknięciem zależności (Dependency Injection)
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    // Pobiera wszystkich użytkowników z bazy danych
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    // Pobiera użytkownika po imieniu (zakładamy, że firstName powinno być unikalne)
    public List<Person> getPersonsByFirstName(String firstName) {
        return personRepository.findByFirstName(firstName);
    }

    // Pobiera użytkownika po nazwisku
    public List<Person> getPersonsByLastName(String lastName) {
        return personRepository.findByLastName(lastName);
    }

    public Optional<Person> getPersonByEmail(String email) {
        return Optional.ofNullable(personRepository.findByEmail(email));
    }

    // Zapisuje nową osobę do bazy danych lub aktualizuje istniejącą
    public Person savePerson(Person person) {
        Optional<Person> existingPerson = getPersonByEmail(person.getEmail());
        return existingPerson.orElseGet(() -> personRepository.save(person));
    }

    public void deletePerson(String id) {
        Optional<Person> person = personRepository.findById(id);
        if (person.isPresent()) {
            personRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Person with id " + id + " does not exist");
        }
    }
}
