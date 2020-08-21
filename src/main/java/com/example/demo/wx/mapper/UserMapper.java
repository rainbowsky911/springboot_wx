package com.example.demo.wx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.wx.pojo.User;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @desc
 *
 * @author lastwhisper
 * @email gaojun56@163.com
 */

public interface UserMapper extends BaseMapper<User> {
}