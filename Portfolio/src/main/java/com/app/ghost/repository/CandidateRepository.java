package com.app.ghost.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ghost.model.Candidate;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
	Optional<Candidate> findCandidateByUserNameAndPassword(String userName, String password);

	Optional<Candidate> findByUserName(String userName);
}
