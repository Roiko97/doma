package com.scholat.doma;

import com.scholat.doma.controller.TeamController;
import com.scholat.doma.entity.DocInfo;
import com.scholat.doma.service.UserService;
import com.scholat.doma.service.impl.DocInfoServiceImpl;
import com.scholat.doma.service.impl.TeamServiceImpl;
import org.attoparser.trace.MarkupTraceEvent;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.StandaloneMockMvcBuilder;


import java.util.Random;

@SpringBootTest
public class MyTests {

    @Autowired
    UserService userService;

    @Autowired
    TeamServiceImpl teamService;

    @Autowired
    DocInfoServiceImpl docInfoService;

    @Test
    public void randomString(){

        String originStr =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();
        StringBuffer stringBuffer = new StringBuffer();
        for(int i =0;i<10;i++){
            int index = random.nextInt(originStr.length());
            char charAt = originStr.charAt(index);
            stringBuffer.append(charAt);
        }
        System.out.println(stringBuffer);
        //return stringBuffer;
    }


    @Test
    public void Test() throws Exception {
        TeamController teamController = new TeamController();
        MockMvc mockMvc = standaloneSetup(teamController).build();
        mockMvc.perform(get("/selectTeam")).andExpect(view().name("index"));

    }

    @Test
    public void Test01(){
        System.out.println(userService.SelectUser("浓",1));;
        System.out.println(userService.SelectUserById("13"));
        System.out.println(userService.SelectUserByName("塔图姆"));

        System.out.println(teamService.SelectAllUserFromTeam("002"));
        System.out.println(teamService.SelectById("003"));


        System.out.println(docInfoService.SelectByDocId("1"));
        System.out.println(docInfoService.SelectByUserId("13"));
    }





}
