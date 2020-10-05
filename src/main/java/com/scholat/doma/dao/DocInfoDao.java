package com.scholat.doma.dao;

import com.scholat.doma.entity.DocInfo;
import org.apache.coyote.OutputBuffer;

import java.util.List;

public interface DocInfoDao {

    public DocInfo SelectByDocId(String docId);

    public List<DocInfo> SelectByUserId(String userId);

    public List<DocInfo> SelectByDocName(String docName);

    public DocInfo SelectByUserIdAndDocName(String userId,String docName);

    public Integer AddDocInfo(DocInfo docInfo);

    public Integer DeleteDocInfoByDocId(String docId);

    public Integer DeleteDocInfoByUserId(String userId);

    public Integer UpdateDocInfoByDocId(DocInfo docInfo);





}
