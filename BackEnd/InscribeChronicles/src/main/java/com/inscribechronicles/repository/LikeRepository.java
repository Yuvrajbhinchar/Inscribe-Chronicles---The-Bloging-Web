package com.inscribechronicles.repository;

import com.inscribechronicles.entity.Like;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface LikeRepository extends MongoRepository<Like, String> {
        //@Query("{ 'userId' : ?0, 'postId' : ?1 }")
        Optional<Like> findByPostIdAndUserId(String userId, String postId);

        long countByPostId(String postId);

        void deleteByUserIdAndPostId(String userId, String postId);
}
