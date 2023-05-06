package com.app.ghost.service;

import java.util.List;

import com.app.ghost.model.OtherSkills;

public interface IOtherSkillService {
	List<OtherSkills> getAllOtherSkills();

	OtherSkills findOtherSkillById(long id);

	OtherSkills saveOtherSkill(OtherSkills newSkill);

	OtherSkills updateOtherSkill(OtherSkills update);

	OtherSkills deleteOtherSkillById(long id);
}
