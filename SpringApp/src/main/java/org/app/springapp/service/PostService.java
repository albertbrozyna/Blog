package org.app.springapp.service;

import org.app.springapp.model.Post;
import org.app.springapp.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    public void savePost(Post post){
        postRepository.save(post);
    }

    public Post getPost(String id){
        Optional<Post> post = postRepository.findById(id);
        return post.orElse(null);
    }

    public List<Post> getPosts(){
        return postRepository.findAll();
    }

    public void deleteAllPosts(){
        postRepository.deleteAll();
    }

    public Boolean deletePost(String id){
        Optional<Post> post = postRepository.findById(id);
        if(post.isPresent()) {
            postRepository.deleteById(id);
            return true; //Post deleted successfully
        }
        return false;
    }

}
