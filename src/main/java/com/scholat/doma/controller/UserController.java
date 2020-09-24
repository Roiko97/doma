package com.scholat.doma.controller;


import com.scholat.doma.entity.TeamMember;
import com.scholat.doma.entity.User;
import com.scholat.doma.service.DocInfoService;
import com.scholat.doma.service.TeamMemberService;
import com.scholat.doma.service.TeamService;
import com.scholat.doma.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    TeamService teamService;
    @Autowired
    DocInfoService docInfoService;
    @Autowired
    TeamMemberService teamMemberService;

    @RequestMapping("creatUser")
    public String addUser(){
        return "creatUser";
    }

    @RequestMapping("toCreatUser")
    public String toAddUser(@RequestParam("userName")String userName,HttpSession session){
        if (userService.InsertUser(userName) == 1){
            session.setAttribute("msg","注册成功，请登录");
            return "login";
        }else {
            session.setAttribute("msg","注册失败，请重新注册");
            return "creatUser";
        }

    }


    @RequestMapping("joinTeam")
    public String JoinTeam(TeamMember teamMember){
        teamMemberService.Add(teamMember);
        return "index";
    }


    @RequestMapping("quitTeam")
    public String quitTeam(String userId,String teamId){
        teamMemberService.quitUniqueTeam(userId,teamId);
        return "index";
    }


}
