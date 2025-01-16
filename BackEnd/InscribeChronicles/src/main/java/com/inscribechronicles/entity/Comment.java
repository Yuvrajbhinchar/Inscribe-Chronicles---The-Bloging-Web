package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Comment {
    @Id
    private String id;
    private String postId;
    private String authorId;
    private String content;
    private int likesCount;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
