package com.scholat.doma.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Jump {

    @RequestMapping("login")
    public String  login(){
        return "login";
    }


}
