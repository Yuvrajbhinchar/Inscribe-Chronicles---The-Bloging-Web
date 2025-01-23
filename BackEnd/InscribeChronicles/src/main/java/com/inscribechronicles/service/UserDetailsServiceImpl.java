package com.inscribechronicles.service;

import com.inscribechronicles.entity.User;
import com.inscribechronicles.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByusername(username)
                .or(() -> userRepository.findByemail(username))
                .orElseThrow(() -> new IllegalArgumentException("Invalid username/email or password"));
        if (user != null) {
            System.out.println("Inside userdetail service " + user);
            return org.springframework.security.core.userdetails.User.builder()
                    .username(user.getUsername())
                    .password(user.getPassword()) // Ensure password is encoded
                    .roles("USER") // You can customize roles here
                    .build();
        }
        throw new UsernameNotFoundException("User not found with username: " + username);    }
}

