package com.app.ghost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ghost.model.Experience;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {
}
