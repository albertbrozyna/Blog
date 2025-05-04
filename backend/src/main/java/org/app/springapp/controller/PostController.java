package org.app.springapp.controller;


import org.app.springapp.model.Post;
import org.app.springapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {
    PostService postService;

    @Autowired
    PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addPost(@RequestBody Post post) {
        try {
            postService.savePost(post);
            return new ResponseEntity<>("Post added successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add post", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return postService.getPosts();
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePostById(@PathVariable String id) {
        try {
            if (postService.deletePost(id)) {
                return new ResponseEntity<>("Post deleted successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>("Failed to delete post", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete post", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
