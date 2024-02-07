package com.travelmate.travelmate.repository;

import com.travelmate.travelmate.model.dto.entities.CustomCreatedUser;
import com.travelmate.travelmate.model.dto.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<CustomCreatedUser, Long> {
     boolean existsByEmail(String email);
     boolean existsByEmailAndPassword(String email, String password);
     void save(User user);
}
