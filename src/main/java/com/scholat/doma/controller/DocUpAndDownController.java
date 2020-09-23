package com.scholat.doma.controller;

import com.scholat.doma.service.DocFileService;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.net.URLEncoder;

/**
 * 实现文件的上传与下载
 */
@Controller
public class DocUpAndDownController {

    @Autowired
    DocFileService docFileService;

    //文件基础路径
    String BASEPATH = "E:\\\\DoMaFilesSpace\\";


    @RequestMapping("/upload")
    private String uploadFile(@RequestParam("file") MultipartFile multipartFile,
                              HttpServletRequest httpServletRequest) throws IOException {
        HttpSession session = httpServletRequest.getSession();
        System.out.println("----------用户正在上传文件...-----------");
        //文件名使用用户上传的文件名
        String fileName = multipartFile.getOriginalFilename();
        System.out.println(multipartFile.getBytes());
        if (!multipartFile.isEmpty()) {
            FileUtils.copyInputStreamToFile(multipartFile.getInputStream(), new File(BASEPATH, fileName));
        }
        //上传好了之后返回主页（未写）
        return "redirect:/home";

    }

    @RequestMapping("/download")
    private ResponseEntity<Object> downloadFile(@RequestParam("filename") String fileName)
            throws UnsupportedEncodingException, FileNotFoundException {
        System.out.println("---------用户正在下载文件...---------");
        //文件路径
        String filePath = BASEPATH + fileName;
        return docFileService.downloadFile(filePath);


    }
}
