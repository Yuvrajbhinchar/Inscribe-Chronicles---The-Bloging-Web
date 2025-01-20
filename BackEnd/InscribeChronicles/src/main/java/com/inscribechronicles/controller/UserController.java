package com.inscribechronicles.controller;

import com.inscribechronicles.Util.JwtUtil;
import com.inscribechronicles.entity.Users;
import com.inscribechronicles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Users user){
        Users users = userService.saveUser(user);
        String jwt  =  jwtUtil.generateToken(users.getUsername());
        System.out.println(jwt);
        System.out.println(users);
        return ResponseEntity.ok(Map.of("user", users, "JWT",jwt));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users users){
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(users.getUsername(), users.getPassword()));
          UserDetails userDetails = userDetailsService.loadUserByUsername(users.getUsername());
        String jwt  =  jwtUtil.generateToken(userDetails.getUsername());
            System.out.println(jwt);
            return ResponseEntity.ok(Map.of("user", users , "JWT" ,jwt));
        } catch (AuthenticationException e) {
            throw new RuntimeException(e);
        }
    }

}
