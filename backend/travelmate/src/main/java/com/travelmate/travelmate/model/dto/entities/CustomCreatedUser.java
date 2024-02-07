package com.travelmate.travelmate.model.dto.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class CustomCreatedUser extends User {

    public CustomCreatedUser(String username, String email, String password) {
        super();
    }

    public CustomCreatedUser() {
        super();
    }

}
