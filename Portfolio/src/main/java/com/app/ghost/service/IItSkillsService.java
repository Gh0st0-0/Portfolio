package com.app.ghost.service;

import java.util.List;

import com.app.ghost.model.ITSkills;

public interface IItSkillsService {
	List<ITSkills> getAllITSkills();

	ITSkills findITSkillById(long id);

	ITSkills saveITSkill(ITSkills newSkill);

	ITSkills updateITSkill(ITSkills update);

	ITSkills deleteITSkillById(long id);
}
