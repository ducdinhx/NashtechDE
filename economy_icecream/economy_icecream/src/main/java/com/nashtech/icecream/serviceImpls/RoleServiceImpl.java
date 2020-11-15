package com.nashtech.icecream.serviceImpls;

import com.nashtech.icecream.model.Role;
import com.nashtech.icecream.repository.RoleRepository;
import com.nashtech.icecream.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
	@Autowired
	private RoleRepository repository;

	@Override
	public List<Role> getAllRoles() {
		return repository.findAll();
	}

	@Override
	public Role saveRole(Role u) {
		return repository.save(u);
	}

	@Override
	public Role getRoleById(long id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public void deleteRole(long id) {
		repository.deleteById(id);
	}

	@Override
	public boolean updateRole(Role u) {
		if (repository.findById((long) u.getRoleId()) != null) {
			repository.save(u);
			return true;
		}
		return false;
	}

}
