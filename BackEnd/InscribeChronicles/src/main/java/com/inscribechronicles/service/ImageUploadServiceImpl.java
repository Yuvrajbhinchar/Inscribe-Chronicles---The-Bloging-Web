package com.inscribechronicles.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ImageUploadServiceImpl implements ImageUploadService{

    @Autowired
    private CloudinaryService cloudinaryService;

    @Override
    public String uploadImage(MultipartFile file) {
        try{
            System.out.println("Inside Image service");
            String imageUrl = cloudinaryService.uploadFile(file);
            return imageUrl;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
