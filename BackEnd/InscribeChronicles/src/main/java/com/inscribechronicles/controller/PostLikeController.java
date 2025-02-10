package com.inscribechronicles.controller;

import com.inscribechronicles.Util.JwtUtil;
import com.inscribechronicles.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
public class PostLikeController {

    @Autowired
    private LikeService likeService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/like")
    public ResponseEntity<?> likePost(@RequestHeader("Authorization") String authHeader, @RequestParam String postId){
        System.out.println("Insid PostLIkeController");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Invalid token");
        }
        String token = authHeader.replace("Bearer ", "");
        String userId = jwtUtil.extractUserId(token);
        System.out.println("userId   " + userId);
       String result =  likeService.likePost(postId,userId);
       return ResponseEntity.ok(result);
    }

}
