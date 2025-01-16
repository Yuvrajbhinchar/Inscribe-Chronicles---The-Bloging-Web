package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Payment {
    @Id
    private String id;
    private String userId;
    private String subscriptionId;
    private double amount;
    private LocalDateTime paymentDate;
    private String paymentMethod;
    private String transactionId;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
