package com.test.service.impl;

import java.util.List;

import com.test.mapper.UserMapper;
import com.test.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.test.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
    UserMapper userMapper;

	public List<User> findAllUser() {

		return userMapper.findAllUser();
	}

}
