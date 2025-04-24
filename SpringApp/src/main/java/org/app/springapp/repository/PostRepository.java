package org.app.springapp.repository;

import org.app.springapp.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface  PostRepository extends MongoRepository<Post, String> {

    List<Post> findPostByTitle(String title);
}
