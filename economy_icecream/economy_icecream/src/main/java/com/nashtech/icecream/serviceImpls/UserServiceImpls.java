package com.nashtech.icecream.serviceImpls;

import com.nashtech.icecream.dto.UserDTO;
import com.nashtech.icecream.exception.ResourceAlreadyExitsException;
import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.User;
import com.nashtech.icecream.repository.UserRepository;
import com.nashtech.icecream.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpls implements UserService {
	@Autowired
	private UserRepository repository;

	@Override
	public List<UserDTO> getAllUsers(Integer pageNo, Integer pageSize, String sortBy) {
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		Page<User> pageResult = repository.findAll(paging);
		if (pageResult.hasContent()) {
			List<User> list = pageResult.getContent();
			List<UserDTO> listUserDto = new ArrayList<UserDTO>();
			for (User user : list) {
				listUserDto.add(convertToUserDTO(user));
			}
			return listUserDto;
		} else {
			return new ArrayList<>();
		}
	}

	@Override
	public UserDTO getUserById(long id) throws ResourceNotFoundException {
		Optional<User> user = repository.findById(id);
		if (user.isPresent()) {
			return convertToUserDTO(user.get());
		} else {
			throw new ResourceNotFoundException("Do not have user with id :" + id);
		}
	}

	@Override
	public User createUser(User entity) throws ResourceAlreadyExitsException {
		Optional<User> user = repository.findById(entity.getUserId());
		if (!user.isPresent()) {
			repository.save(user.get());
			return user.get();
		} else {
			throw new ResourceAlreadyExitsException("");
		}

	}

	@Override
	public User updateUser(long id, UserDTO entity) throws ResourceAlreadyExitsException {
		Optional<User> user = repository.findById(id);
		if (user.isPresent()) {
			User newUser = user.get();
			newUser.setAvatar(entity.getAvatar());
			newUser.setFirstname(entity.getFirstName());
			newUser.setLastName(entity.getLastName());
			newUser.setPhoneNumber(entity.getPhone());
			newUser.setBirthday(entity.getBirthday());
			return newUser;
		} else {
			throw new ResourceAlreadyExitsException("error:can't update user");
		}
	}

	@Override
	public void deleteUserById(long id) throws ResourceNotFoundException {
		Optional<User> user = repository.findById(id);
		if (user.isPresent()) {
			repository.deleteById(id);
		} else {
			throw new ResourceNotFoundException("No employee record exits for given id: " + id);
		}

	}

	private UserDTO convertToUserDTO(User user) {
		UserDTO userDTO = new UserDTO(user.getUserId(), user.getUsername(), user.getFirstname(), user.getLastName(),
				user.getEmail(), user.getPhoneNumber(), user.getBirthday(), user.getAvatar(), user.getRoles(),
				user.getEnable());
		return userDTO;
	}

}
