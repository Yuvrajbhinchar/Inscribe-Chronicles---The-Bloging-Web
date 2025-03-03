package com.inscribechronicles.controller;

import com.inscribechronicles.dto.AddPostDto;
import com.inscribechronicles.dto.PostDto;
import com.inscribechronicles.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;


    @PostMapping("/allPosts")
    public List<PostDto> getAllPosts(){
        System.out.println("Inside getAllPostsController");
        return postService.findAll();
    }

    @PostMapping("/singlePost/{id}")
    public List<PostDto> getPostById(@PathVariable String id){
        System.out.println("Inside getSinglePOst");
        return postService.findById(id);
    }

    @PostMapping("/createPost")
    public ResponseEntity<?> createPost(@RequestBody AddPostDto addPostDto){
        postService.AddPost(addPostDto);
        return ResponseEntity.ok("post upload successfully");
    }


}
