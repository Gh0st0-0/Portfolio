package com.app.ghost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ghost.model.Credentials;

@Repository
public interface CredentialsRepository extends JpaRepository<Credentials, Long> {

}
