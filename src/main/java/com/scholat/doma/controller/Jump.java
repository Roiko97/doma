package com.scholat.doma.controller;

import com.scholat.doma.entity.User;
import com.scholat.doma.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@RequestMapping
@Controller
public class Jump {

    @Autowired
    private UserService userService;

    @RequestMapping("login")
    public String  login(){
        return "login";
    }

    @RequestMapping("/user/test")
    public String test(@RequestParam("userName") String userName, HttpSession session){
        System.out.println(userName);
       // User user = userService.SelectUserByName(userName);
        System.out.println("运行到这里了");
        return "Summarize";
//        if (user != null){
//            session.setAttribute("user",user);
//            return "login";
//        }else {
//            session.setAttribute("msg","用户名或密码错误，请检查后再登录");
//            return "login";
//        }
    }
    @RequestMapping("/user/logout")
    @ResponseBody
    public String Logout(HttpSession session, Model model){
        session.removeAttribute("user");
        session.setAttribute("msg","您已退出，请登录后访问");
        return "login";
    }


}
