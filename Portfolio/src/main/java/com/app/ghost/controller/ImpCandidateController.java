package com.app.ghost.controller;

import com.app.ghost.model.Candidate;
import com.app.ghost.model.SafeCandidate;

public interface ImpCandidateController {
	SafeCandidate fetchCandidate(long id);

	boolean candidatePersisted(Candidate person);

	Candidate candidateUpdated(Candidate updated);
	
	boolean login(Candidate logcan);
}
