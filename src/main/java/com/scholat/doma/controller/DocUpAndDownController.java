package com.scholat.doma.controller;

import com.scholat.doma.dao.DocInfoDao;
import com.scholat.doma.entity.DocInfo;
import com.scholat.doma.global.RandomID;
import com.scholat.doma.service.DocFileService;
import com.scholat.doma.service.DocInfoService;
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
import java.util.UUID;

/**
 * 实现文件的上传与下载
 */
@Controller
public class DocUpAndDownController {

    @Autowired
    DocFileService docFileService;

    @Autowired
    DocInfoService docInfoService;

    //文件基础路径
    String BASEPATH = "E:\\\\DoMaFilesSpace\\";

    /**
     * 由用户id+文档名查出文档记录，保存文件到本地后记录本地的文档地址，
     * 后期也可改成由用户id+文档id查找，看前端需求
     * @param multipartFile
     * @param userId 用户id
     * @param docName 文档名
     * @param httpServletRequest
     * @return
     * @throws IOException
     */
    @RequestMapping("/upload")
    private String uploadFile(@RequestParam("file") MultipartFile multipartFile,
                              @RequestParam("userId") String userId,
                              @RequestParam(value = "docName") String docName,
                              HttpServletRequest httpServletRequest) throws IOException {
        HttpSession session = httpServletRequest.getSession();
        System.out.println("用户id："+userId);
        System.out.println("文档名："+docName);
        System.out.println("请求体："+httpServletRequest);

        DocInfo docInfo = docInfoService.SelectByUserIdAndDocName(userId,docName);
        //查不到则报错
        if(docInfo==null) {
            System.out.println("不存在该用户或者文档");
            return "error/400";
        }

        //获取原始文件名
        String originalFilename = multipartFile.getOriginalFilename();
        //若无文档名则直接使用文件名
        if(docName.isEmpty()) docName = originalFilename;

        String docId = docInfo.getDocId();

        //生成保存在文件名
        String fileName = docId+"-"+ UUID.randomUUID()+"-"+originalFilename;

        //生成完整路径
        String filePath = BASEPATH + fileName;

        //文件上传
        System.out.println(multipartFile.getBytes());
        if (!multipartFile.isEmpty()) {
            //保存文件到本地
            try {
                FileUtils.copyInputStreamToFile(multipartFile.getInputStream(), new File(filePath));
            } catch (IOException e) {
                e.printStackTrace();
            }
            System.out.println("文件上传成功！保存到了："+filePath);
            //生成服务器本地地址
            String address = filePath;

            //更新文件地址到数据库中
            docInfo.setAddress(filePath);
            Integer res = docInfoService.UpdateDocInfoByDocId(docInfo);
            //插入失败则跳转到500
            if(res<0) return "error/500";

            //上传好了之后返回成功
            return "uploadSuccess";
        }

        else {
            System.out.println("没有上传文件！");
            return "error/400";
        }

    }

    /**
     * 传入文档id下载文档
     * @param docId
     * @return
     * @throws UnsupportedEncodingException
     * @throws FileNotFoundException
     */
    @RequestMapping("/download")
    private ResponseEntity<Object> downloadFile(@RequestParam("docId") String docId)
            throws UnsupportedEncodingException, FileNotFoundException {
        //根据文档ID从数据库中得到文档存在本地的路径
        DocInfo docInfo = docInfoService.SelectByDocId(docId);
        String filePath = docInfo.getAddress();

        System.out.println("---------用户正在下载文件...---------");
        return docFileService.downloadFile(filePath);


    }
}
