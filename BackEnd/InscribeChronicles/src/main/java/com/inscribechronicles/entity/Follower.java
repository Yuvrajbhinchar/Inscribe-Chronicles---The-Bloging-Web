package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Follower {
    @Id
    private String id;
    private String followerId;
    private String followingId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
