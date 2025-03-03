package com.inscribechronicles.mapper;

import com.inscribechronicles.dto.PostDto;
import com.inscribechronicles.entity.Post;
import com.inscribechronicles.entity.User;
import org.springframework.stereotype.Component;

@Component
public class PostDtoMapper {
    public PostDto toPostDto(Post post, User user, long likeCount, boolean isLike){
        System.out.println("Inside PostMapper toPostDto");
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setAuthorName(user.getUsername());
        postDto.setTitle(post.getTitle());
        postDto.setSummary(post.getSummary());
        postDto.setContent(post.getContent());
        postDto.setContent(post.getContent());
        postDto.setTags(post.getTags());
        postDto.setLikeCount(likeCount);
        postDto.setViews(post.getViews());
        postDto.setLike(isLike);
        postDto.setCommentsCount(post.getCommentsCount());
        postDto.setCreatedAt(post.getCreatedAt());
        return postDto;
    }

}
