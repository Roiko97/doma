package com.scholat.doma.controller;

import com.scholat.doma.service.UserService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller

public class UserLoginController {

    @Autowired
    private UserService userService;



    @RequestMapping("/user/login")
    @ResponseBody
    public boolean Login(@RequestParam("userId") String userId){
        boolean flag = true;
        if (userService.SelectUserById(userId) == null) {
            flag = false;
        }
        return flag;
    }


    @RequestMapping("test")
    @ResponseBody
    public String test(){
        return "This is a test page";
    }


}
