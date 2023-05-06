package com.app.ghost.service;

import java.time.LocalDate;
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

	@Override
	public List<ITSkills> getAllITSkills() {
		log.info("List of Skills is returned", LocalDate.now());
		return this.itSRepo.findAll();
	}

	@Override
	public ITSkills findITSkillById(long id) {
		ITSkills skill = this.itSRepo.findById(id).orElse(null);
		if (skill != null) {
			log.info("Fetched the skill: ", LocalDate.now(), skill);
			return skill;
		} else {
			log.error("Fetching Skill reurns: ", LocalDate.now(), skill);
			return skill;
		}
	}

	@Override
	public ITSkills saveITSkill(ITSkills newSkill) {
		return this.itSRepo.save(newSkill);
	}

	@Override
	public ITSkills updateITSkill(ITSkills update) {
		ITSkills skill = this.itSRepo.findById(update.getId()).orElse(null);
		if (skill != null) {
			skill.setTechnologies(update.getTechnologies());
			skill.setVersion(update.getVersion());
			skill.setScore(update.getScore());
			log.info("Updated IT Skill: ", LocalDate.now(), skill);
			return this.itSRepo.save(skill);
		} else {
			log.error("Error in updating IT Skill", LocalDate.now(), skill);
			return skill;
		}
	}

	@Override
	public ITSkills deleteITSkillById(long id) {
		ITSkills skill = this.itSRepo.findById(id).orElse(null);
		if (skill != null) {
			log.info("Deliting the skill: ", LocalDate.now(), skill);
			this.itSRepo.delete(skill);
			return skill;
		} else {
			log.error("Skill with id" + id + " doesnot exists and returns ", LocalDate.now(), skill);
			return skill;
		}
	}

}
