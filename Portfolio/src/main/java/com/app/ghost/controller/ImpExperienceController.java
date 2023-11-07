package com.app.ghost.controller;

import java.util.List;

import com.app.ghost.model.Experience;

public interface ImpExperienceController {
	boolean persistExperience(Experience exp);

	boolean deleteExperience(long cand_id, long exp_id);

	Experience updateExperience(Experience update);

	Experience getExperienceById(long exp_id);

	List<Experience> getAllExperience(long cand_id);
}
