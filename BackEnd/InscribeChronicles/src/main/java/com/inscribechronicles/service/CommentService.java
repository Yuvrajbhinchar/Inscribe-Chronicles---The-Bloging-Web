package com.inscribechronicles.service;

import com.inscribechronicles.dto.CommentDto;

import java.util.List;

public interface CommentService {
    public List<CommentDto> getComment(String postId);
}
