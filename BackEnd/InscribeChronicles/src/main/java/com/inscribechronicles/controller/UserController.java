package com.inscribechronicles.controller;

import com.inscribechronicles.Util.JwtUtil;
import com.inscribechronicles.dto.UserDto;
import com.inscribechronicles.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public ResponseEntity<?> SignUpUser(@Valid @RequestBody UserDto userDto){
        System.out.println("inside signup controller");
        try {
            String result = userService.registerUser(userDto);
            String Jwt = jwtUtil.generateToken(userDto.getUsername());
            return ResponseEntity.ok(Map.of("result", result ,"JWT",Jwt));
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

}
