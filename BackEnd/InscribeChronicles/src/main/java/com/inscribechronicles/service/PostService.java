package com.inscribechronicles.service;

import com.inscribechronicles.dto.AddPostDto;
import com.inscribechronicles.dto.PostDto;

import java.util.List;

public interface PostService {
    List<PostDto> findAll();
    List<PostDto> findById(String id);
    String AddPost(AddPostDto addPostDto);
}
