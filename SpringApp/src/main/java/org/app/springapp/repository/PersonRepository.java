package org.app.springapp.repository;

import org.app.springapp.model.Person;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PersonRepository extends MongoRepository<Person, String> {
    // Możesz dodać własne metody, np. zapytania na podstawie nazwy

    List<Person> findByFirstName(String firstName);

    // Metoda wyszukująca osobę po nazwisku
    List<Person> findByLastName(String lastName);


    // Można także dodać metodę do wyszukiwania po imieniu i nazwisku
    List<Person> findByFirstNameAndLastName(String firstName, String lastName);

    // Możesz również wyszukiwać osobę po adresie e-mail (jeśli pole 'email' istnieje w klasie Person)
    Person findByEmail(String email);
}