package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Notification {
    @Id
    private String id;
    private String userId;
    private String type;
    private String message;
    private boolean readStatus;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
