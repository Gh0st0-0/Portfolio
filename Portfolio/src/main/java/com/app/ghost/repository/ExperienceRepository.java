package com.app.ghost.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ghost.model.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {
}
