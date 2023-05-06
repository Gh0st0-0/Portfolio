package com.app.ghost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ghost.model.ContactMe;

@Repository
public interface ContactMeRepository extends JpaRepository<ContactMe, Long> {

}
