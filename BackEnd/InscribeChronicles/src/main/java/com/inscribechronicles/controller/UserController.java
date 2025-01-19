package com.inscribechronicles.controller;

import com.inscribechronicles.entity.Users;
import com.inscribechronicles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Users> saveUser(@RequestBody Users user){
        Users users = userService.saveUser(user);
        System.out.println(users);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/username")
    public ResponseEntity<Users> getUser(@PathVariable String username){
      Users user =  userService.getUser(username);
      return new ResponseEntity<>(user,HttpStatus.OK);
    }

}
