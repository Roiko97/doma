package com.scholat.doma.service;

import com.scholat.doma.entity.DocInfo;

import java.util.List;

public interface DocInfoService {

    public DocInfo SelectByDocId(String docId);

    public List<DocInfo> SelectByUserId(String userId);

    public List<DocInfo> SelectByDocName(String docName);

    public Integer AddDocInfo(DocInfo docInfo);

    public Integer DeleteDocInfoByDocId(String docId);

    public Integer DeleteDocInfoByUserId(String userId);

    public Integer UpdateDocInfoByDocId(DocInfo docInfo);


}
