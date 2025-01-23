package com.inscribechronicles.repository;

import com.inscribechronicles.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;


public interface UserRepository extends MongoRepository<User,String> {
    boolean existsByusername(String username);
    boolean existsByemail(String email);
    Optional<User> findByusername(String username);
    Optional<User> findByemail(String email);
}
