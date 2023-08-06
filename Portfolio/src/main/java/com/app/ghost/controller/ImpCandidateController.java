package com.app.ghost.controller;

import com.app.ghost.model.Candidate;

public interface ImpCandidateController {
	Candidate fetchCandidate(long id);

	boolean candidatePersisted(Candidate person);

	Candidate candidateUpdated(Candidate updated);
	
	boolean login(Candidate logcan);
}
