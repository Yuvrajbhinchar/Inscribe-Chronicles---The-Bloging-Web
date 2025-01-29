package com.inscribechronicles.service;

import com.inscribechronicles.dto.PostDto;
import com.inscribechronicles.entity.Post;
import com.inscribechronicles.entity.User;
import com.inscribechronicles.mapper.PostDtoMapper;
import com.inscribechronicles.repository.PostRepository;
import com.inscribechronicles.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostDtoMapper postDtoMapper;

    @Override
    public List<PostDto> findAll() {
        System.out.println("Inside PostService findAll Method");
      List<Post> posts = postRepository.findAll();
      List<PostDto> postDtos = new ArrayList<>();

      for(Post post : posts){
          Optional<User> Optinaluser = userRepository.findById(post.getAuthorId());
          User user = Optinaluser.get();
         postDtos.add( postDtoMapper.toPostDto(post, user));

      }
      return postDtos;
    }
}
