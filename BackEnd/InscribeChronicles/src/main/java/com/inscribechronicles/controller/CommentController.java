package com.inscribechronicles.controller;

import com.inscribechronicles.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/post")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/fetchcomment/{postId}")
    public ResponseEntity<?> fetchComments(@PathVariable String postId){
        return ResponseEntity.ok(commentService.getComment(postId));
    }

}
