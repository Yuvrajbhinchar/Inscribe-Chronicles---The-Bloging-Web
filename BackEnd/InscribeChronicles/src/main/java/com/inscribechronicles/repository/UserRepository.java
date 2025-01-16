package com.inscribechronicles.repository;

import com.inscribechronicles.entity.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<Users,String> {

    Optional<Users>findByusername(String username);
}
