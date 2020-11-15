package com.nashtech.icecream.repository;

import com.nashtech.icecream.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query(value = "update users password=?1 WHERE user_id=?2", nativeQuery = true)
	void updateUserPassword(String newPassword, long id);

	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	
	List<User> findByUsernameContaining(String username);
	

}	
