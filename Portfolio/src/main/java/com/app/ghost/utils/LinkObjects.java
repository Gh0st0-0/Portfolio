package com.app.ghost.utils;

import com.app.ghost.model.Candidate;
import com.app.ghost.model.ITSkills;
import com.app.ghost.model.OtherSkills;
import com.app.ghost.model.ProjectImages;
import com.app.ghost.model.Projects;

public class LinkObjects {
	// Method to link the candidate in the itSkill 
	public ITSkills linkCandToITSkill(Candidate cand, ITSkills skill) {
		skill.setCand(cand);;	// Set the candidate in the skill
		return skill;
	}
	
	// Method to link the candidate in the OtherSkill
	public OtherSkills linkCandToOtherSkill(Candidate cand, OtherSkills skill) {
		skill.setCand2(cand);
		return skill;
	}
	
	// Method to link project in the project Image
	public ProjectImages linkProjectToImage(Projects proj, ProjectImages pi) {
		pi.setProj(proj);
//		proj.addImage(pi);
		return pi;
	}
}
