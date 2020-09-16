package com.scholat.doma;

import com.scholat.doma.entity.DocInfo;
import com.scholat.doma.service.UserService;
import com.scholat.doma.service.impl.DocInfoServiceImpl;
import com.scholat.doma.service.impl.TeamServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
    public void UserTest(){
        System.out.println(userService.SelectUser("浓",1));;
    }

    @Test
    public void TeamTest(){


        System.out.println(teamService.SelectAllUserFromTeam("002"));

        System.out.println(teamService.SelectById("003"));

        System.out.println(teamService.DeleteTeam("005"));


    }


    @Test
    public void DocInfoTest(){

        System.out.println(docInfoService.SelectByDocId("1"));

        System.out.println(docInfoService.SelectByUserId("13"));

//        DocInfo docInfo = new DocInfo("123", "456", null, null, null, null, null, null);
//        System.out.println(docInfoService.AddDocInfo(docInfo));
//
//        docInfoService.DeleteDocInfoByDocId("456");
//
//        docInfoService.DeleteDocInfoByUserId("123");
//
//        DocInfo docInfo = new DocInfo("145584", "3", null, "随便什么都好", null, null, null, null);
//        System.out.println(docInfoService.UpdateDocInfoByDocId(docInfo));

        System.out.println(docInfoService.SelectByDocName("地方"));

    }


}
