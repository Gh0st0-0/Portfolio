package com.app.ghost.utils;

import com.app.ghost.model.Candidate;
import com.app.ghost.model.SafeCandidate;

public class SaveCandidate {
	private SafeCandidate safeCandi;
	
	private static SaveCandidate sCandi = null;
	
	private SaveCandidate() {
		this.safeCandi = new SafeCandidate();
	}
	
	public static SaveCandidate getSaveCandi() {
		if(sCandi == null) {
			sCandi = new SaveCandidate();
		}
		return sCandi;
	}
	
	public SafeCandidate lockCandidate(Candidate candi) {
		safeCandi.setFirstName(candi.getFirstName());
		safeCandi.setMiddleName(candi.getMiddleName());
		safeCandi.setLastName(candi.getLastName());
		safeCandi.setCurrentWorkingLocation(candi.getCurrentWorkingLocation());
		safeCandi.setRoll(candi.getRoll());
		
		return this.safeCandi;
	}
}
