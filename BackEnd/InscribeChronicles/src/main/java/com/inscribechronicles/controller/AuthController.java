package com.inscribechronicles.controller;

import com.inscribechronicles.Util.JwtUtil;
import com.inscribechronicles.entity.User;
import com.inscribechronicles.repository.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> formData, HttpServletResponse response) {
        String username = formData.get("email");
        if(username == null){
            username = formData.get("username");
        }
        String password = formData.get("password");
        System.out.println("Inside login controller " + username + "  " + password);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
        );

        User user = userRepository.findByusername(username)
                .orElseThrow(()-> new RuntimeException("User Not Found"));

        // If authentication is successful, generate JWT token
        String jwt = jwtUtil.generateToken(username,user.getId());

        // Set JWT token in cookie
        response.addHeader("Authorization", "Bearer " + jwt);

        return ResponseEntity.ok(Map.of("JWT",jwt));
    }

    // Logout: Clear JWT token (if using cookies, you would clear the cookie)
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        // Clear JWT token from cookies
        response.setHeader("Authorization", null);
        return ResponseEntity.ok("Logged out successfully");
    }

}
