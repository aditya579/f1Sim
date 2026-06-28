package com.example.f1Sim.controller;


import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

@RestController
//@CrossOrigin(origins = "http://localhost:8080")
public class F1HomePageController {

    @RequestMapping("/F1")
    public String homePage(){
        return "Welcome to world of F1";
    }
    @RequestMapping("/getMapImage")
    public ResponseEntity<Resource> getMapImage(){

        String IMAGE_DIRECTORY = "static/circuits/detailed/black/"+"austin-1.svg";
        System.out.println("IMAGE_DIRECTORY: "+IMAGE_DIRECTORY);
        Resource res = new ClassPathResource(IMAGE_DIRECTORY);

        if (!res.exists()) {
            return ResponseEntity.notFound().build();
        }


        // Dynamically determine content type (or hardcode MediaType.IMAGE_JPEG_VALUE etc.)
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("image/svg+xml"))
                .body(res);
    }

//    @RequestMapping("/startF1Replay")
//    public String startF1Replay(){
//
//    }

}
