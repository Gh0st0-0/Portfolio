package com.app.ghost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ghost.model.OtherSkills;

@Repository
public interface OtherSkillRepository extends JpaRepository<OtherSkills, Long> {

}
