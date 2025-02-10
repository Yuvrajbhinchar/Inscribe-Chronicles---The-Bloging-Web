package com.inscribechronicles.repository;

import com.inscribechronicles.entity.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post,String> {

}
