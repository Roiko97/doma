package com.scholat.doma.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Jump {

    @RequestMapping("login")
    public String  login(){
        return "login";
    }

    //测试分页
    @RequestMapping("/page")
    public String page(){return "pageInfoTest";}

    //测试上传
    @RequestMapping("/fileupload")
    public String upload(){return "test/Upload";}

    //测试新建文档
    @RequestMapping("/testcreatedoc")
    public String createDoc(){ return "test/CreateDoc"; }


}
