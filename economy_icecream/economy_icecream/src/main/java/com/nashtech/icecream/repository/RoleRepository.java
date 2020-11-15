package com.nashtech.icecream.repository;

import com.nashtech.icecream.model.ERole;
import com.nashtech.icecream.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
   Optional<Role> findByName(ERole role);
}
