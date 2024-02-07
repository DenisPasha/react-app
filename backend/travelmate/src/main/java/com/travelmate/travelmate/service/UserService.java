package com.travelmate.travelmate.service;


import com.travelmate.travelmate.config.CurrentUser;
import com.travelmate.travelmate.model.dto.entities.CustomCreatedUser;
import com.travelmate.travelmate.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final CurrentUser currentUser;
    private final ModelMapper modelMapper;


    public UserService(UserRepository userRepository, CurrentUser currentUser, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.currentUser = currentUser;
        this.modelMapper = modelMapper;
    }


    public void checkUser(OAuth2AuthenticationToken auth2AuthenticationToken) {

//        auth2AuthenticationTokenUser user = new CustomCreatedUser();
//        user.setUserName(auth2AuthenticationToken.getPrincipal().getAttribute("name"));
//        user.setEmail(auth2AuthenticationToken.getPrincipal().getAttribute("email"));
//
//
//        boolean userExists = userRepository.existsByEmail(user.getEmail());
//        if (!userExists){
//            userRepository.save(user);
//        }

    }

}
