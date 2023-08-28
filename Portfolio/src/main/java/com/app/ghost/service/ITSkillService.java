package com.app.ghost.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.ghost.model.ITSkills;
import com.app.ghost.repository.ITSkillRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ITSkillService implements IItSkillsService {

	private ITSkillRepository itSRepo;

	public ITSkillService(ITSkillRepository itSRepo) {
		this.itSRepo = itSRepo;
	}

	/*
	 * get the list of all the it skills and return it
	 */
	@Override
	public List<ITSkills> getAllITSkills() {
		log.info("List of Skills is returned");
		return this.itSRepo.findAll();
	}

	/*
	 * find the particular ItSkill using id
	 */
	@Override
	public ITSkills findITSkillById(long id) {
		ITSkills skill = this.itSRepo.findById(id).orElse(null);
		if (skill != null) {
			log.info("Fetched the skill: ", skill);
			return skill;
		} else {
			log.error("Fetching Skill reurns: ", skill);
			return skill;
		}
	}

	/*
	 * Persist the itSkill and return the saved object
	 */
	@Override
	public ITSkills saveITSkill(ITSkills newSkill) {
		return this.itSRepo.save(newSkill);
	}

	/*
	 * update the it skill and return the updated object
	 */
	@Override
	public ITSkills updateITSkill(ITSkills update) {
		ITSkills skill = this.itSRepo.findById(update.getId()).orElse(null);
		if (skill != null) {
			skill.setTechnologies(update.getTechnologies());
			skill.setVersion(update.getVersion());
			skill.setScore(update.getScore());
			skill.setIconsClass(update.getIconsClass());
			skill.setCategory(update.getCategory());
			log.info("Updated IT Skill: ", skill);
			return this.itSRepo.save(skill);
		} else {
			log.error("Error in updating IT Skill", skill);
			return skill;
		}
	}

	/*
	 * delete the It Skill from the list and return the deleted object
	 */
	@Override
	public ITSkills deleteITSkillById(long id) {
		ITSkills skill = this.itSRepo.findById(id).orElse(null);
		if (skill != null) {
			log.info("Deliting the skill: ", skill);
			this.itSRepo.delete(skill);
			return skill;
		} else {
			log.error("Skill with id" + id + " doesnot exists and returns ", skill);
			return skill;
		}
	}

}
