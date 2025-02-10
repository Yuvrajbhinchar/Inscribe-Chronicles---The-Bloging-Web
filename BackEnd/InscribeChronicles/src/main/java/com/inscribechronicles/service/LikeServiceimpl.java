package com.inscribechronicles.service;

import com.inscribechronicles.entity.Like;
import com.inscribechronicles.repository.LikeRepository;
import com.inscribechronicles.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class LikeServiceimpl implements LikeService{

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Override
    public String likePost (String postId, String userId){
        System.out.println("Inside LikeService");
        Optional<Like> existLike= likeRepository.findByUserIdAndPostId(postId,userId);
        if(existLike.isPresent()){
            likeRepository.delete(existLike.get());
            return "Unlike";
        }else {
            Like like = new Like();
            like.setPostId(postId);
            like.setUserId(userId);
            likeRepository.save(like);
            return "Liked";
        }
    }

}
