package com.nashtech.icecream.service;

import com.nashtech.icecream.model.Role;

import java.util.List;

public interface RoleService {
	public List<Role> getAllRoles();

	public Role saveRole(Role u);

	public Role getRoleById(long id);

	public void deleteRole(long id);

	public boolean updateRole(Role u);

}
