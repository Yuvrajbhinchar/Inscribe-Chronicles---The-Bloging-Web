package com.inscribechronicles.service;

import com.inscribechronicles.entity.Users;
import com.inscribechronicles.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Optional;

@Service

public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Users saveUser(Users user){
       return userRepository.save(user);
    }

    @GetMapping("/username")
    public Users getUser(String username){
         Optional<Users> user =  userRepository.findByusername(username);
         return user.orElse(null);
    }
}
