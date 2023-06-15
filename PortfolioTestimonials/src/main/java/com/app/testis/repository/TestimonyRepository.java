package com.app.testis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.testis.model.Testimoney;

@Repository
public interface TestimonyRepository extends JpaRepository<Testimoney,Long>{}
