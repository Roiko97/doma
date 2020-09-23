package com.scholat.doma.dao;

import com.scholat.doma.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.junit.Test;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Repository
public interface UserDao {
    // flag = 0 查询单个用户 flag = 1 进行模糊查询
    public List<User>  SelectUser(String userName,Integer flag);
    public User SelectUserById(String userId);
    public User SelectUserByName(String userName);
    public Integer InsertUser(String userName,String userId);
    public Integer UpdateUserName(String newUserName,String userId);


}
