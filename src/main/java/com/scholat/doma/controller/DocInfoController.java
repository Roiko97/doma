package com.scholat.doma.controller;

import com.alibaba.fastjson.JSONObject;
import com.scholat.doma.entity.DocInfo;
import com.scholat.doma.entity.User;
import com.scholat.doma.service.DocInfoService;
import com.scholat.doma.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class DocInfoController {

    @Autowired
    UserService userService;

    @Autowired
    DocInfoService docInfoService;

    @RequestMapping("/getYourDocInfo")
    @ResponseBody
    public String getYourDocInfo(@RequestParam("userId")String userId){

        User user = userService.SelectUserById(userId);
        List<DocInfo> docInfos = docInfoService.SelectByUserId(userId);

        JSONObject jsonObject =  new JSONObject();
        jsonObject.put("user",user);
        System.out.println(user);
        jsonObject.put("docInfos",docInfos);
        System.out.println(docInfos);
        return jsonObject.toJSONString();

    }




}
