package com.app.ghost.service;

import com.app.ghost.model.Academics;
import com.app.ghost.model.Candidate;
import com.app.ghost.model.Credentials;
import com.app.ghost.model.Experience;
import com.app.ghost.model.ITSkills;
import com.app.ghost.model.OtherSkills;
import com.app.ghost.model.Projects;

public interface ICandidateService {
	boolean saveCandidate(Candidate newCandidate);

	Candidate updateCandidate(Candidate updated);

	Candidate findCandidate(long id);
	
	boolean linkCreds(Credentials creds, long id);

	Candidate loginByUsernameAndPassword(String userName, String password);
	
	boolean linkITSkill(ITSkills skill, long id);
	
	boolean unlinkITSkill(ITSkills skill, long cand_id);
	
	boolean linkOtherSkill(OtherSkills skill, long cand_id);
	
	boolean unlinkOtherSkill(OtherSkills skill, long cand_id);
	
	boolean linkProject(Projects proj, long cand_id);
	
	boolean unlinkProject(Projects proj, long cand_id);
	
	boolean linkAcademics(Academics acad, long cand_id);
	
	boolean unlinkAcademics(Academics acad, long cand_id);
	
	boolean linkExperience(Experience expi, long cand_id);
	
	boolean unlinkExperience(Experience expi, long cand_id);
}
