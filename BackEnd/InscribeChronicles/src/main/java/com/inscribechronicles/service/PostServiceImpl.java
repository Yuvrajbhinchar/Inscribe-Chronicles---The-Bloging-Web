package com.inscribechronicles.service;

import com.inscribechronicles.dto.AddPostDto;
import com.inscribechronicles.dto.PostDto;
import com.inscribechronicles.entity.Like;
import com.inscribechronicles.entity.Post;
import com.inscribechronicles.entity.User;
import com.inscribechronicles.mapper.PostDtoMapper;
import com.inscribechronicles.repository.LikeRepository;
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
    private LikeRepository likeRepository;

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
         long likeCount =  likeRepository.countByPostId(post.getId());
         Optional<Like> optional = likeRepository.findByPostIdAndUserId(post.getId(), user.getId());
         if(optional.isPresent()) {
             postDtos.add(postDtoMapper.toPostDto(post, user, likeCount,true));
         } else {
             postDtos.add(postDtoMapper.toPostDto(post,user,likeCount,false));
         }
      }
      return postDtos;
    }

    @Override
    public List<PostDto> findById(String id) {
        Post post = postRepository.findById(id).orElseThrow(()-> new RuntimeException("No Post Found"));
       User user =  userRepository.findById(post.getAuthorId()).orElseThrow(()-> new RuntimeException("NO Author Found"));
        long likeCount  = likeRepository.countByPostId(id);
        Optional<Like> optional = likeRepository.findByPostIdAndUserId(post.getId(), user.getId());
        if(optional.isPresent()) {
            return List.of(postDtoMapper.toPostDto(post, user, likeCount, true));
        } else{
            return List.of(postDtoMapper.toPostDto(post, user, likeCount, false));
        }

    }
    @Override
    public String AddPost(AddPostDto addPostDto) {
        Post post = new Post();
        post.setTitle(addPostDto.getTitle());
        post.setAuthorId(addPostDto.getAuthorId());
        post.setContent(addPostDto.getContent());
        post.setCategory(addPostDto.getCategory());
        post.setSummary(addPostDto.getSummary());
        post.setTags(addPostDto.getTags());
        postRepository.save(post);
        return "Post Upload Succesfully";
    }
}
