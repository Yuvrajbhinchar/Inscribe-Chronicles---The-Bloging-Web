package com.inscribechronicles.controller;

import com.inscribechronicles.dto.SignupDto;
import com.inscribechronicles.service.SignUpService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class SignUpController {

    @Autowired
    private SignUpService signUpService;

    @PostMapping("/signup")
    public ResponseEntity<?> SignUpUser(@Valid @RequestBody SignupDto signupDto){
        System.out.println("inside signup controller");
        try {
            String result = signUpService.registerUser(signupDto);
            return ResponseEntity.ok(result);
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

}
