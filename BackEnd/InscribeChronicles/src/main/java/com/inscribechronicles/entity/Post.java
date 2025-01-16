package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.List;

public class Post {
    @Id
    private String id;
    private String authorId;
    private String title;
    private String slug;
    private String content;
    private String summary;
    private List<String> tags;
    private int commentsCount;
    private List<Clap> claps;
    private int views;
    private String status;
    private boolean isFeatured;
    private boolean premium;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static class Clap {
        private String userId;
        private int count;
    }
}
