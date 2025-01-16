package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Follow {
    @Id
    private String id;
    private String userId;
    private String postId;
    private String followedUserId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
