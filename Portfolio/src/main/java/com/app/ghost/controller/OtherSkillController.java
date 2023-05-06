package com.app.ghost.controller;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ghost.model.Candidate;
import com.app.ghost.model.OtherSkills;
import com.app.ghost.service.CandidateService;
import com.app.ghost.service.OtherSkillService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class OtherSkillController implements ImpOtherSkillController {
	
	private OtherSkillService othSkillServ;
	private CandidateService candServ;

	public OtherSkillController(OtherSkillService othSkillServ, CandidateService candServ) {
		this.othSkillServ = othSkillServ;
		this.candServ = candServ;
	}

	@Override
	@PostMapping("/otherskill/persist/saveskill/getcand/{cand_id}")
	public boolean otherSkillPersisted(long cand_id, OtherSkills skill) {
		OtherSkills skillSave = this.othSkillServ.saveOtherSkill(skill);
		if(skillSave != null) {
			log.info("Other skill saved in the database successfully", LocalDate.now(), skillSave);
			if(this.candServ.linkOtherSkill(skillSave, cand_id)) {
				return true;
			}else {
				return false;
			}
		}else {
			log.error("Skill not saved in the database", LocalDate.now(), skillSave);
			return false;
		}
	}

	@Override
	@PostMapping("/otherskill/persist/update4")
	public OtherSkills updateOtherSkill(OtherSkills skill) {
		OtherSkills update = this.othSkillServ.updateOtherSkill(skill);
		if(update != null) {
			log.info("Other Skills updated successfully", LocalDate.now(), update);
		}else {
			log.error("Other Skills not updated", LocalDate.now(), update);
		}
		return update;
	}

	@Override
	@PostMapping("/otherskill/fetchITSkill/{skill_id}")
	public OtherSkills fetchSkillById(long skill_id) {
		OtherSkills skill = this.othSkillServ.findOtherSkillById(skill_id);
		if(skill != null) {
			log.info("Skill fetched by id: " + skill_id, LocalDate.now(), skill);
		}else {
			log.error("Skill not found using id: " + skill_id, LocalDate.now(), skill);
		}
		return skill;
	}

	@Override
	@GetMapping("/otherskill/fetchList/getcand/{cand_id}")
	public List<OtherSkills> fetchAllOtherSkills(long cand_id) {
		Candidate cand = this.candServ.findCandidate(cand_id);
		if(cand != null) {
			log.info("Candidate found and list of skill returned", LocalDate.now(), cand);
			return cand.getOtherSkills();
		}else {
			log.error("Candidate not found to return list of Other skills", LocalDate.now(), cand);
			return null;
		}
	}

	@Override
	@PostMapping("/otherskill/getCand/{cand_id}/delete/{skill_id}")
	public OtherSkills removeOSkill(long cand_id, long skill_id) {
		OtherSkills del = this.othSkillServ.findOtherSkillById(skill_id);
		if(this.candServ.unlinkOtherSkill(del, cand_id)) {
			OtherSkills skill = this.othSkillServ.deleteOtherSkillById(skill_id);
			if(skill != null) {
				log.info("Removed the Skill, in controller", LocalDate.now(), skill);
			}else {
				log.error("Failed to remove skill in the controller", LocalDate.now(), skill);
			}
			return skill;
		}else {
			return null;
		}
	}

}
