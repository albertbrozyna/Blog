package org.app.springapp.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "posts")
public class Post {

    @Id
    String id;
    Person person;
    String title;
    String content;

    Post(Person person, String title, String content) {
        this.person = person;
        this.title = title;
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Person getPerson() {
        return person;
    }

    public String getContent() {
        return content;
    }

    public String getTitle() {
        return title;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
