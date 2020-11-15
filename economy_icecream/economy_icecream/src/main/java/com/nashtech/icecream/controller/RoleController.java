package com.nashtech.icecream.controller;

import com.nashtech.icecream.exception.ResourceNotFoundException;
import com.nashtech.icecream.model.Role;
import com.nashtech.icecream.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/task")
public class RoleController {
	@Autowired
	private RoleService service;

	@GetMapping("/role")
	public List<Role> getAllRoles() {
		return service.getAllRoles();
	}

	@PostMapping("/role")
	public Role saveRole(@RequestBody Role u) {
		return service.saveRole(u);

	}

	@GetMapping("/role/{id}")
	public Role getRoleById(@PathVariable long id) throws ResourceNotFoundException {
		Role e = service.getRoleById(id);
		if (e != null) {
			return e;
		} else {
			throw new ResourceNotFoundException("Role not found for this id" + id);
		}

	}

	@PutMapping("/{id}")
	public Role updateRole(@PathVariable long id, Role u) throws ResourceNotFoundException {
		if (service.updateRole(u)) {
			return u;
		} else {
			throw new ResourceNotFoundException("Role not found for this id" + id);
		}
	}

	@DeleteMapping("/role/{id}")
	public Map<String, Boolean> deleteRole(@PathVariable long id) throws ResourceNotFoundException {
		if (service.getRoleById(id) != null) {
			service.deleteRole(id);
			Map<String, Boolean> reponse = new HashMap<String, Boolean>();
			reponse.put("deleted", Boolean.TRUE);
			return reponse;
		} else {
			throw new ResourceNotFoundException("Role not found for this id" + id);
		}

	}


}
