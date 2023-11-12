package com.app.ghost.utils;

import com.app.ghost.exception.AcadmicsNotPersistedException;
import com.app.ghost.model.Academics;
import com.app.ghost.model.Candidate;
import com.app.ghost.service.AcadmicService;
import com.app.ghost.service.CandidateService;

public class LinkAcadmics {

	public Academics persistLinkAcadmics(AcadmicService acadServ, CandidateService candServ, Academics acad) {
		try {
			/*
			 * if the academics object is linked successfully to the candidate object then
			 * the academics object is persisted in the database
			 */
			acad = this.linkCandToAcademics(acad, candServ);
			return candServ.linkAcademics(acad, 1) ? acadServ.persistAcadmics(acad) : null;
		} catch (AcadmicsNotPersistedException e) {
			e.printStackTrace();
			return null;
		}
	}

	public boolean deleteUnlinkAcademics(AcadmicService acadServ, CandidateService candServ, long cand_id,
			long acad_id) {
		/*
		 * first the object is deleted from the database which returns the deleted
		 * object, which is sent as an argument to unlink it from the candidate
		 */
		return candServ.unlinkAcademics(acadServ.removeAcadmicFromHistory(acad_id), cand_id);
	}
	
	public Academics linkCandToAcademics(Academics acad, CandidateService candServ) {
		Candidate cand = candServ.findCandidate(1);
		acad.set_cand(cand);
		return acad;
	}
}
