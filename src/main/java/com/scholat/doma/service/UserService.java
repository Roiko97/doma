package com.scholat.doma.service;

import com.scholat.doma.entity.User;

import java.util.List;

public interface UserService {
    public List<User> SelectUser(String userName, Integer flag);
    public Integer InsertUser(String userName);
    public Integer UpdateUserName(String newUserName,String userId);

}
