package com.app.ghost.service;

import java.util.List;

import com.app.ghost.exception.ExperienceNotPersistedException;
import com.app.ghost.model.Experience;

public interface IExperienceService {
	Experience persistExperience(Experience exp) throws ExperienceNotPersistedException;

	Experience removeExperience(long id);

	Experience updateExperience(Experience update);
	
	Experience findExperienceById(long id);
	
	List<Experience> getallExperience();
}
