package com.app.ghost.controller;

import java.util.List;

import com.app.ghost.model.ITSkills;

public interface ImpItSkillController {
	boolean itSkillPersisted(long cand_id, ITSkills skill);

	ITSkills updateITSkill(ITSkills skill);

	ITSkills fetchSkillByID(long skill_id);

	List<ITSkills> fetchAllSkills(long cand_id);
	
	ITSkills removeSkill(long cand_id, long id);
}
