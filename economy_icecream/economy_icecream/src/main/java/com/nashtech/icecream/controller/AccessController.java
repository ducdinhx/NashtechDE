package com.nashtech.icecream.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class AccessController {
	@GetMapping("/all")
	public String publicContext() {
		return " Context";
	}
	@GetMapping("/user")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF') or hasRole('ROLE_ADMIN')")
	public String userAccess() {
		return "User Context";
	}
	@GetMapping("/staff")
	@PreAuthorize("hasRole('ROLE_STAFF')")
	public String staffAccess() {
		return "Staff context";
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public String adminAccess() {
		return "Admin Context";
	}

}
