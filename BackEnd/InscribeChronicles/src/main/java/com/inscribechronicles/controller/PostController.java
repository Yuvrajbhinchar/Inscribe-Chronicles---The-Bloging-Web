package com.inscribechronicles.controller;

import com.inscribechronicles.dto.PostDto;
import com.inscribechronicles.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
