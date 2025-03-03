package com.inscribechronicles.service;

import com.inscribechronicles.dto.CommentDto;
import com.inscribechronicles.entity.Comment;
import com.inscribechronicles.entity.User;
import com.inscribechronicles.mapper.CommentDtoMapper;
import com.inscribechronicles.repository.CommentRepository;
import com.inscribechronicles.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentDtoMapper commentDtoMapper;

    @Override
    public List<CommentDto> getComment(String postId) {
        List<Comment> comment = commentRepository.findByPostId(postId);
        List<CommentDto> comments = new ArrayList<>();
        if (comment == null) {
            throw new RuntimeException("No Comment Found");
        }
        for (Comment comment1 : comment) {
            User user = userRepository.findById(comment1.getAuthorId()).orElseThrow(() -> new RuntimeException("user not found"));
            comments.add(commentDtoMapper.toCommentDto(comment1, user));
        }

        return comments;
    }
}
