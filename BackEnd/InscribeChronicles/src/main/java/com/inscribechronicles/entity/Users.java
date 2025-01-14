package com.inscribechronicles.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document
public class Users {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String bio;
    private String profilePicture;
    private int followersCount;
    private int followingCount;
    private int postsCount;
    private List<String> followers; // List of user IDs
    private List<String> following; // List of user IDs
    private List<String> bookmarkedPosts;
    private String membershipStatus;
    private String subscriptionId;
    private Date subscriptionStart;
    private Date subscriptionEnd;
    private Date createdAt;
    private Date updatedAt;
}
