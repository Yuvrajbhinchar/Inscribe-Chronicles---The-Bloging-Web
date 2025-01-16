package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.List;

public class Analytics {
    @Id
    private String id;
    private String postId;
    private int views;
    private List<String> uniqueVisitors;
    private int likes;
    private int comments;
    private int premiumViews;
    private int freeViews;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
