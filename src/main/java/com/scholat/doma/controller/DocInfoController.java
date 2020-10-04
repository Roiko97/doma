package com.scholat.doma.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.scholat.doma.entity.DocInfo;
import com.scholat.doma.entity.User;
import com.scholat.doma.service.DocInfoService;
import com.scholat.doma.service.UserService;
import com.scholat.doma.service.impl.DocInfoServiceImpl;
import com.scholat.doma.service.impl.TeamServiceImpl;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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

    /**
     * 查询用户的文档信息，新增分页返回功能
     * @param userId 用户id
     * @param pageNum 查询页码，默认为第一页
     * @return json
     */
    @RequestMapping("/getYourDocInfo")
    @ResponseBody
    public String getYourDocInfo(@RequestParam("userId")String userId,@RequestParam(defaultValue = "1") Integer pageNum,
                                 @RequestParam(defaultValue = "4") Integer pageSize){

        User user = userService.SelectUserById(userId);
        //将需要分页的查询写在startPage方法紧接的下一句（否则分页失败）
        PageHelper.startPage(pageNum,pageSize);
        List<DocInfo> docInfos = docInfoService.SelectByUserId(userId);

        PageInfo<DocInfo> pageInfo = new PageInfo<>(docInfos);   //将分页数据和显示数据封装到pageinfo中

        JSONObject jsonObject =  new JSONObject();
//        jsonObject.put("user",user);
//        System.out.println(user);
//        jsonObject.put("docInfos",docInfos);
//        System.out.println(docInfos);
        //将分页处理的pageinfo放入json中送往前端
        jsonObject.put("pageInfo",pageInfo);

        //漂亮打印json
        String prettyJSON = JSON.toJSONString(jsonObject,SerializerFeature.PrettyFormat, SerializerFeature.WriteMapNullValue,
                SerializerFeature.WriteDateUseDateFormat);
        System.out.println(prettyJSON);
        return jsonObject.toJSONString();

    }




}
