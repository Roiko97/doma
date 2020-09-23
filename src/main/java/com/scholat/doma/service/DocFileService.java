package com.scholat.doma.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.FileNotFoundException;
import java.io.UnsupportedEncodingException;

public interface DocFileService {

    //文件下载
    public ResponseEntity<Object> downloadFile(String fileName)
            throws UnsupportedEncodingException, FileNotFoundException;
}
