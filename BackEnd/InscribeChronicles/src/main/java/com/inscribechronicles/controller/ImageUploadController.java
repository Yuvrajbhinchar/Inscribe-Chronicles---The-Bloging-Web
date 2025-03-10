package com.inscribechronicles.controller;

import com.inscribechronicles.service.ImageUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/upload")
public class ImageUploadController {

    @Autowired
    private ImageUploadService imageUploadService;

    @PostMapping("/image")
    public ResponseEntity<?> uploadImage(@RequestParam("file")MultipartFile file){

        System.out.println("Inside uploadImage controller");

       String imageUrl =  imageUploadService.uploadImage(file);

       return ResponseEntity.ok(imageUrl + "   image Upload Succesfully on this Url");
    }

}
