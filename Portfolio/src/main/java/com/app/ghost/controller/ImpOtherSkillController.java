package com.app.ghost.controller;

import java.util.List;

import com.app.ghost.model.OtherSkills;

public interface ImpOtherSkillController {
	boolean otherSkillPersisted(long cand_id, OtherSkills skill);
	
	OtherSkills updateOtherSkill(OtherSkills skill);
	
	OtherSkills fetchSkillById(long skill_id);
	
	List<OtherSkills> fetchAllOtherSkills(long cand_id);
	
	OtherSkills removeOSkill(long cand_id, long skill_id);
}
