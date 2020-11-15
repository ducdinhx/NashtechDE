package com.nashtech.icecream.controller;

import com.nashtech.icecream.dto.UserDTO;
import com.nashtech.icecream.exception.ResourceAlreadyExitsException;
import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.User;
import com.nashtech.icecream.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/task")
@CrossOrigin(origins = {"*", "http://localhost:3000"}, allowedHeaders = "*")
public class UserController {
	@Autowired
	private UserService service;

	@GetMapping("/user")
	public List<UserDTO> getAllUser(@RequestParam(defaultValue = "0") Integer pageNo,
								 @RequestParam(defaultValue = "20") Integer pageSize, @RequestParam(defaultValue = "userId") String sortBy) {
		return service.getAllUsers(pageNo, pageSize, sortBy);
	}

	@GetMapping("/user/{id}")
	public UserDTO getUserById(@PathVariable long id) throws ResourceNotFoundException {
		return service.getUserById(id);
	}

	@PutMapping("/user/{id}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public User updateUser(@PathVariable long id, @RequestBody UserDTO u) throws ResourceAlreadyExitsException {
		return service.updateUser(id, u);
	}

	@DeleteMapping("/user/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Map<String, Boolean> deleteUser(@PathVariable long id) throws ResourceNotFoundException {
		service.deleteUserById(id);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	


}
