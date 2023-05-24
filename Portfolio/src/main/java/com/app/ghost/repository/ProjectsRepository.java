package com.app.ghost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ghost.model.Projects;

@Repository
public interface ProjectsRepository extends JpaRepository<Projects, Long> {}
