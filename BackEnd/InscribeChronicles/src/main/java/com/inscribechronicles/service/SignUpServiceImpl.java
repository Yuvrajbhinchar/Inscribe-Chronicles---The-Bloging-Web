package com.inscribechronicles.service;

import com.inscribechronicles.dto.SignupDto;
import com.inscribechronicles.entity.User;
import com.inscribechronicles.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignUpServiceImpl implements SignUpService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String registerUser(SignupDto signupDto) {
        System.out.println("Inside register user service");
        if(userRepository.existsByusername(signupDto.getUsername())){
                throw new IllegalArgumentException("Username is already taken.");
            }

        if (userRepository.existsByemail(signupDto.getEmail())) {
            throw new IllegalArgumentException("Email is already registered.");
        }

        if (!signupDto.getPassword().equals(signupDto.getConfirmPassword())) {
            throw new IllegalArgumentException("Passwords do not match.");
        }
        User user = new User();
        user.setUsername(signupDto.getUsername());
        user.setEmail(signupDto.getEmail());
        user.setPassword(passwordEncoder.encode(signupDto.getPassword()));
        userRepository.save(user);
        System.out.println("Save User Entry Succefull");

        return "User registered successfully!";
    }
}

