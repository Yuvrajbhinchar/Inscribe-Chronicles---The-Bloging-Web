package com.inscribechronicles.service;

import com.inscribechronicles.entity.Users;
import com.inscribechronicles.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public Users saveUser(Users user) {
        // Encode the password before saving
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        return userRepository.save(user);
    }

    public Users getUserByUsername(String username) {
        return userRepository.findByusername(username);
    }
}

