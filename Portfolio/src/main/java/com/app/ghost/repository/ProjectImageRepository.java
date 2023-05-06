package com.app.ghost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ghost.model.ProjectImages;

@Repository
public interface ProjectImageRepository extends JpaRepository<ProjectImages, Long>{

}
