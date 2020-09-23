package com.scholat.doma.controller;


import com.scholat.doma.entity.Team;
import com.scholat.doma.entity.User;
import com.scholat.doma.service.DocInfoService;
import com.scholat.doma.service.TeamService;
import com.scholat.doma.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class TeamController {

    @Autowired
    UserService userService;
    @Autowired
    TeamService teamService;
    @Autowired
    DocInfoService docInfoService;

    @RequestMapping("creatTeam")
    public String creatTeam(){
        return "creatTeam";
    }

    @RequestMapping("toCreatTeam")
    public String ToCreatTeam(Team team){
        teamService.insertTeam(team);
        return "index";
    }

    @RequestMapping("deleteTeam")
    public String DeleteTeam(@RequestParam("teamId")String teamId){
        teamService.DeleteTeam(teamId);
        return "index";
    }

//    restful风格
//    @RequestMapping("deleteTeam/{team}")
//    public String DeleteTeam(@PathVariable("teamId")String teamId){
//        teamService.DeleteTeam(teamId);
//        return "index";
//    }


    @RequestMapping("upateTeam")
    public String udateTeam(){
        return "upateTeam";
    }

    @RequestMapping("toUpdateTeam")
    public String ToUpdateTeam(Team team){
        teamService.updateTeam(team);
        return "index";
    }

    @RequestMapping("selectTeam")
    public String SelectTeam(@RequestParam(value = "teamId")String teamId, HttpSession session){
        Team team = teamService.SelectById(teamId);
        session.setAttribute("team",team);
        return "index";
    }

    @RequestMapping("selectAllUserFromTeam")
    public String SelectAllUserFromTeam(@RequestParam("teamId")String teamId,HttpSession session){
        List<User> userList = teamService.SelectAllUserFromTeam(teamId);
        session.setAttribute("userList",userList);
        return "index";

    }


}
