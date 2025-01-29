package com.inscribechronicles.filter;

import com.inscribechronicles.Util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFiltter extends OncePerRequestFilter {
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String requestURI = request.getRequestURI();
        System.out.println("Inside Jwt filter for URI: " + requestURI);

        // Skip filter for public endpoints
        if (requestURI.equals("/auth/login") || requestURI.equals("/auth/signup")) {
            System.out.println("Skipping Jwt filter for public endpoint: " + requestURI);
            filterChain.doFilter(request, response);
            return;
        }

        String authorizerHeader = request.getHeader("Authorization");
        System.out.println("Authorization Header: " + authorizerHeader);

        String username = null;
        String jwt = null;

        if (authorizerHeader != null && authorizerHeader.startsWith("Bearer ")) {
            jwt = authorizerHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
            System.out.println("Extracted Username: " + username);
        } else {
            System.out.println("Authorization header missing or invalid.");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            System.out.println("Loaded UserDetails for: " + username);

            if (jwtUtil.validateToken(jwt)) {
                System.out.println("JWT is valid for: " + username);
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(auth);
            } else {
                System.out.println("JWT is invalid for: " + username);
            }
        }

        filterChain.doFilter(request, response);
    }
}