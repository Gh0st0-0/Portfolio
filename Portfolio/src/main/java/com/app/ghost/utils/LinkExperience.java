package com.app.ghost.utils;

import com.app.ghost.exception.ExperienceNotPersistedException;
import com.app.ghost.model.Experience;
import com.app.ghost.service.CandidateService;
import com.app.ghost.service.ExperienceService;

public class LinkExperience {

	/*
	 * first the experience object is linked to the candidate and if the candidate
	 * is successfully linked then the experience object is persisted and saved
	 * object is returned
	 */
	public Experience persistLinkExperience(ExperienceService expServ, CandidateService candServ, Experience exp) {
		try {
			return candServ.linkExperience(exp, 1) ? expServ.persistExperience(exp) : null;
		} catch (ExperienceNotPersistedException e) {
			e.printStackTrace();
			return null;
		}
	}

	/*
	 * first the experience object is removed from the DB and an object of the
	 * deleted object is returned and that object is passed to the method whice
	 * unlinks the candidate object with the experience object
	 */
	public boolean deleteUnlinkExperience(ExperienceService expServ, CandidateService candServ, long cand_id,
			long exp_id) {
		return candServ.unlinkExperience(expServ.removeExperience(exp_id), cand_id);
	}
}
