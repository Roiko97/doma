package com.scholat.doma.entity;

import java.util.Date;

public class DocInfo {

    private String userId;
    private String docId;
    private Date pubTime;
    private String docName;
    private Integer recommend;
    private String style;
    private String address;
    private Integer existAnn;

    @Override
    public String toString() {
        return "DocInfo{" +
                "userId='" + userId + '\'' +
                ", docId='" + docId + '\'' +
                ", pubTime=" + pubTime +
                ", docName='" + docName + '\'' +
                ", recommend=" + recommend +
                ", style='" + style + '\'' +
                ", address='" + address + '\'' +
                ", existAnn=" + existAnn +
                '}';
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getDocId() {
        return docId;
    }

    public void setDocId(String docId) {
        this.docId = docId;
    }

    public Date getPubTime() {
        return pubTime;
    }

    public void setPubTime(Date pubTime) {
        this.pubTime = pubTime;
    }

    public String getDocName() {
        return docName;
    }

    public void setDocName(String docName) {
        this.docName = docName;
    }

    public Integer getRecommend() {
        return recommend;
    }

    public void setRecommend(Integer recommend) {
        this.recommend = recommend;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getExistAnn() {
        return existAnn;
    }

    public void setExistAnn(Integer existAnn) {
        this.existAnn = existAnn;
    }

    public DocInfo() {
    }

    public DocInfo(String userId, String docId, Date pubTime, String docName, Integer recommend, String style, String address, Integer existAnn) {
        this.userId = userId;
        this.docId = docId;
        this.pubTime = pubTime;
        this.docName = docName;
        this.recommend = recommend;
        this.style = style;
        this.address = address;
        this.existAnn = existAnn;
    }


}
