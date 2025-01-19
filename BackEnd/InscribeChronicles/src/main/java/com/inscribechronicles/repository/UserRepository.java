package com.inscribechronicles.repository;

import com.inscribechronicles.entity.Users;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface UserRepository extends MongoRepository<Users,String> {

    Users findByusername(String username);
}
