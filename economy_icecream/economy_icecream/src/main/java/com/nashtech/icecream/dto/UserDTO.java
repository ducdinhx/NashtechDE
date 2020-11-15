package com.nashtech.icecream.dto;

import java.time.LocalDate;
import java.util.Set;

import com.nashtech.icecream.model.Role;

public class UserDTO {
	private Long userId;
	private String username;
	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private LocalDate birthday;
	private String avatar;
	private Set<Role> roles;
	private Boolean isEnable;
   public UserDTO() {
}
	public UserDTO(Long userId, String username, String firstName, String lastName, String email, String phone,
			LocalDate birthday, String avatar, Set<Role> roles, Boolean isEnable) {
		super();
		this.userId = userId;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.birthday = birthday;
		this.avatar = avatar;
		this.roles = roles;
		this.isEnable = isEnable;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public LocalDate getBirthday() {
		return birthday;
	}

	public void setBirthday(LocalDate birthday) {
		this.birthday = birthday;
	}

	public String getAvatar() {
		return avatar;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public Boolean getIsEnable() {
		return isEnable;
	}

	public void setIsEnable(Boolean isEnable) {
		this.isEnable = isEnable;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getEnable() {
		return isEnable;
	}

	public void setEnable(Boolean enable) {
		isEnable = enable;
	}
}
