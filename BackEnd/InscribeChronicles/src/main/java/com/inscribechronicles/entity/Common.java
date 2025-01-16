package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Common {
    @Id
    private String id;
    private String name;
    private String value;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
