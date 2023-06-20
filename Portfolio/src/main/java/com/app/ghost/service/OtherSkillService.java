package com.app.ghost.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.app.ghost.model.OtherSkills;
import com.app.ghost.repository.OtherSkillRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class OtherSkillService implements IOtherSkillService {

	private OtherSkillRepository oSkillRepo;

	public OtherSkillService(OtherSkillRepository oSkillRepo) {
		this.oSkillRepo = oSkillRepo;
	}

	@Override
	public List<OtherSkills> getAllOtherSkills() {
		log.info("List of Skills is returned", LocalDate.now());
		return this.oSkillRepo.findAll();
	}

	@Override
	public OtherSkills findOtherSkillById(long id) {
		OtherSkills skill = this.oSkillRepo.findById(id).orElse(null);
		if (skill != null) {
			log.info("Fetched the Skill: ", skill);
			return skill;
		} else {
			log.error("Fettching Skill returns: ", skill);
			return skill;
		}
	}

	@Override
	public OtherSkills saveOtherSkill(OtherSkills newSkill) {
		return this.oSkillRepo.save(newSkill);
	}

	@Override
	public OtherSkills updateOtherSkill(OtherSkills update) {
		OtherSkills skill = this.oSkillRepo.findById(update.getId()).orElse(null);
		if (skill != null) {
			skill.setTechnologies(update.getTechnologies());
			skill.setVersion(update.getVersion());
			skill.setScore(update.getScore());
			skill.setIconsClass(update.getIconsClass());
			log.info("Updated the Other skills: ", skill);
			return this.oSkillRepo.save(skill);
		} else {
			log.error("Error in updating the Other Skill: ", skill);
			return skill;
		}
	}

	@Override
	public OtherSkills deleteOtherSkillById(long id) {
		OtherSkills skill = this.oSkillRepo.findById(id).orElse(null);
		if (skill != null) {
			log.info("Deleting thr skill: ", skill);
			this.oSkillRepo.delete(skill);
			return skill;
		} else {
			log.error("Skill with id" + id + " doesnot exists and returns ", skill);
			return skill;
		}
	}

}
