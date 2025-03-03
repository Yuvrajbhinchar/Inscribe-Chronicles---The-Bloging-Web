package com.inscribechronicles.mapper;

import com.inscribechronicles.dto.CommentDto;
import com.inscribechronicles.entity.Comment;
import com.inscribechronicles.entity.User;
import org.springframework.stereotype.Component;

@Component
public class CommentDtoMapper {
    public CommentDto toCommentDto(Comment comment, User user){
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setPostId(comment.getPostId());
        commentDto.setAuthorName(user.getUsername());
        commentDto.setContent(comment.getContent());
        commentDto.setLikesCount(comment.getLikesCount());

        return commentDto;
    }

}
