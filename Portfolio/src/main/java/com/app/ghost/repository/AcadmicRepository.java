package com.app.ghost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ghost.model.Academics;

@Repository
public interface AcadmicRepository extends JpaRepository<Academics, Long> {
}
