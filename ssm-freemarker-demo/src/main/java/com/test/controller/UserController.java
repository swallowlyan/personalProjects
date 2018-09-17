package com.test.controller;

import java.util.List;

import com.test.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.test.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping("/all")
	public String helloUser(Model model) {
		List<User> list = userService.findAllUser();
		model.addAttribute("users", list);
		model.addAttribute("total", list.size());
		System.out.print(list);
		return "/user_list";
	}
	
}
