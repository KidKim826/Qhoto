package com.qhoto.qhoto_api.api.controller;

import com.qhoto.qhoto_api.api.repository.UserRepository;
import com.qhoto.qhoto_api.api.service.LoginService;
import com.qhoto.qhoto_api.api.service.UserService;
import com.qhoto.qhoto_api.domain.User;
import com.qhoto.qhoto_api.dto.request.ModifyUserReq;
import com.qhoto.qhoto_api.dto.response.LoginRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {
    private final UserRepository userRepository;
    private final LoginService loginService;
    private final UserService userService;


    @PostMapping("/login/google")
    public ResponseEntity<LoginRes> googleLogin(@RequestBody Map<String,String> idToken) throws GeneralSecurityException, IOException {
        LoginRes loginRes = loginService.loginGoogle(idToken.get("idToken"));
        return new ResponseEntity<>(loginRes, HttpStatus.OK);
    }

    @PostMapping("/login/kakao")
    public ResponseEntity<LoginRes> kakaoLogin(@RequestBody Map<String, String> kakaoToken) {
        LoginRes loginRes = loginService.loginKakao(kakaoToken.get("accessToken"));
        return new ResponseEntity<>(loginRes, HttpStatus.OK);
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('ROLE_USER')")
    public User getCurrentUser(@AuthenticationPrincipal User user) {
        return userRepository.findById(user.getId()).orElseThrow(() -> new IllegalStateException("not found user"));
    }

    @PutMapping("/user/modify")
    public ResponseEntity<String> modifyUser(@AuthenticationPrincipal User user,@RequestBody ModifyUserReq modifyUserReq) throws IOException {
        userService.modifyUser(modifyUserReq, user);
        return ResponseEntity.ok().body("success");
    }



}
