package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.List;

public class Subscription {
    @Id
    private String id;
    private String planName;
    private double price;
    private String description;
    private String duration;
    private List<String> benefits;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
