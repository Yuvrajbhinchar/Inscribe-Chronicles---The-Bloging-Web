package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Bookmark {
    @Id
    private String id;
    private String userId;
    private String postId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
