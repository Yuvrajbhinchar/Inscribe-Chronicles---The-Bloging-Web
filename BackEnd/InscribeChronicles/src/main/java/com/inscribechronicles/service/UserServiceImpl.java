package com.inscribechronicles.service;

import com.inscribechronicles.dto.UserDto;
import com.inscribechronicles.entity.User;
import com.inscribechronicles.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String registerUser(UserDto userDto) {
        System.out.println("Inside register user service");
        if(userRepository.existsByusername(userDto.getUsername())){
                throw new IllegalArgumentException("Username is already taken.");
            }

        if (userRepository.existsByemail(userDto.getEmail())) {
            throw new IllegalArgumentException("Email is already registered.");
        }

        if (!userDto.getPassword().equals(userDto.getConfirmPassword())) {
            throw new IllegalArgumentException("Passwords do not match.");
        }
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(user);
        System.out.println("Save User Entry Succefull");

        return "User registered successfully!";
    }
}

