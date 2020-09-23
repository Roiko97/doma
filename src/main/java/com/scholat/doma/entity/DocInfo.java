package com.scholat.doma.entity;

import java.util.Date;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DocInfo {

    private String userId;
    private String docId;
    private Date pubTime;
    private String docName;
    private Integer recommend;
    private String style;
    private String address;
    private Integer existAnn;



}
