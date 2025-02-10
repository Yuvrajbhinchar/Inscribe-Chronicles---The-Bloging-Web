package com.inscribechronicles.repository;

import com.inscribechronicles.entity.Like;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface LikeRepository extends MongoRepository<Like, String> {
        Optional<Like> findByUserIdAndPostId(String userId, String postId);
        long countByPostId(String postId);
        void deleteByUserIdAndPostId(String userId, String postId);
}
