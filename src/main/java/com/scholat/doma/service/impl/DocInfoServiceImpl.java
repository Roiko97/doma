package com.scholat.doma.service.impl;

import com.scholat.doma.dao.DocInfoDao;
import com.scholat.doma.entity.DocInfo;
import com.scholat.doma.service.DocInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DocInfoServiceImpl implements DocInfoService {

    @Autowired
    private DocInfoDao docInfoDao;

    public void setDocInfoDao(DocInfoDao docInfoDao) {
        this.docInfoDao = docInfoDao;
    }

    @Override
    public DocInfo SelectByDocId(String docId) {
        return docInfoDao.SelectByDocId(docId);
    }

    @Override
    public List<DocInfo> SelectByDocName(String docName) {
        return docInfoDao.SelectByDocName(docName);
    }

    @Override
    public List<DocInfo> SelectByUserId(String userId) {
        return docInfoDao.SelectByUserId(userId);
    }

    @Override
    public Integer AddDocInfo(DocInfo docInfo) {
        return docInfoDao.AddDocInfo(docInfo);
    }

    @Override
    public Integer DeleteDocInfoByDocId(String docId) {
        return docInfoDao.DeleteDocInfoByDocId(docId);
    }

    @Override
    public Integer DeleteDocInfoByUserId(String userId) {
        return docInfoDao.DeleteDocInfoByUserId(userId);
    }

    @Override
    public Integer UpdateDocInfoByDocId(DocInfo docInfo) {
        return docInfoDao.UpdateDocInfoByDocId(docInfo);
    }
}
