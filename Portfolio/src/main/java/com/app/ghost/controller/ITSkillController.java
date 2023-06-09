package com.app.ghost.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ghost.model.Candidate;
import com.app.ghost.model.ITSkills;
import com.app.ghost.service.CandidateService;
import com.app.ghost.service.ITSkillService;
import com.app.ghost.utils.LinkObjects;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class ITSkillController implements ImpItSkillController {

	private ITSkillService itService;
	private CandidateService candServ;
	private LinkObjects persist;

	public ITSkillController(ITSkillService itService, CandidateService candServ) {
		this.itService = itService;
		this.candServ = candServ;
		this.persist = new LinkObjects();
	}

	// use aop to save cand in skill
	@Override
	@PostMapping("/itskill/persist/saveskill/getcand/{cand_id}")
	public boolean itSkillPersisted(@PathVariable long cand_id, @RequestBody ITSkills skill) {
		ITSkills newSkill = this.itService
				.saveITSkill(this.persist.linkCandToITSkill(this.candServ.findCandidate(cand_id), skill));  // the candidate is persisted
																											// in the skill list which return 
																											// the updated skill which is saved
																											// in the database
		if (newSkill != null) {
			log.info("Skill saved in the database successfully", newSkill);
			if (this.candServ.linkITSkill(newSkill, cand_id)) {
				return true;
			} else {
				return false;
			}
		} else {
			log.error("Skill not saved in the database", newSkill);
			return false;
		}
	}

	@Override
	@PostMapping("/itskill/persist/update3")
	public ITSkills updateITSkill(@RequestBody ITSkills skill) {
		ITSkills update = this.itService.updateITSkill(skill);
		if (update != null) {
			log.info("IT Skills updated successfully", update);
		} else {
			log.error("IT Skills not updated", update);
		}
		return update;
	}

	@Override
	@PostMapping("/itskill/fetchITSkill/{skill_id}")
	public ITSkills fetchSkillByID(@PathVariable long skill_id) {
		ITSkills its = this.itService.findITSkillById(skill_id);
		if (its != null) {
			log.info("Skill fetched by id: " + skill_id, its);
		} else {
			log.error("Skill not found using id: " + skill_id, its);
		}
		return its;
	}

	@Override
	@GetMapping("/itskill/fetchList/getcand/{cand_id}")
	public List<ITSkills> fetchAllSkills(@PathVariable long cand_id) {
		Candidate cand = this.candServ.findCandidate(cand_id);
		if (cand != null) {
			log.info("Candidate found and list of skill returned", cand);
			return cand.getItSkills();
		} else {
			log.error("Candidate not found to return list of IT skills", cand);
			return null;
		}
	}

	@Override
	@PostMapping("/itskill/getCand/{cand_id}/delete/{skill_id}")
	public ITSkills removeSkill(@PathVariable long cand_id, @PathVariable long skill_id) {
		ITSkills del = this.itService.findITSkillById(skill_id);
		if (this.candServ.unlinkITSkill(del, skill_id)) {
			ITSkills skill = this.itService.deleteITSkillById(skill_id);
			if (skill != null) {
				log.info("Removed the Skill, in controller", skill);
			} else {
				log.error("Failed to remove skill in the controller", skill);
			}
			return skill;
		} else {
			return null;
		}
	}

}
