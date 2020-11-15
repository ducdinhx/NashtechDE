package com.nashtech.icecream.service;

import com.nashtech.icecream.dto.UserDTO;
import com.nashtech.icecream.exception.ResourceAlreadyExitsException;
import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.User;

import java.util.List;

public interface UserService {
	public List<UserDTO> getAllUsers(Integer pageNo, Integer pageSize, String sortBy);

	public UserDTO getUserById(long id) throws ResourceNotFoundException;

	User createUser(User entity) throws ResourceAlreadyExitsException;

	User updateUser(long id, UserDTO entity) throws ResourceAlreadyExitsException;

	public void deleteUserById(long id) throws ResourceNotFoundException;

}
