package com.app.ghost.controller;

import java.time.LocalDate;
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

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class ITSkillController implements ImpItSkillController {
	
	private ITSkillService itService;
	private CandidateService candServ;

	public ITSkillController(ITSkillService itService, CandidateService candServ) {
		this.itService = itService;
		this.candServ = candServ;
	}

	// use aop to save cand in skill 
	@Override
	@PostMapping("/itskill/persist/saveskill/getcand/{cand_id}")
	public boolean itSkillPersisted(@PathVariable long cand_id, @RequestBody ITSkills skill) {
		ITSkills newSkill = this.itService.saveITSkill(skill);
		if(newSkill != null) {
			log.info("Skill saved in the database successfully", LocalDate.now(), newSkill);
			if(this.candServ.linkITSkill(newSkill, cand_id)) {
				return true;
			}else {
				return false;
			}
		}else {
			log.error("Skill not saved in the database", LocalDate.now(), newSkill);
			return false;
		}
	}

	@Override
	@PostMapping("/itskill/persist/update3")
	public ITSkills updateITSkill(@RequestBody ITSkills skill) {
		ITSkills update = this.itService.updateITSkill(skill);
		if(update != null) {
			log.info("IT Skills updated successfully", LocalDate.now(), update);
		}else {
			log.error("IT Skills not updated", LocalDate.now(), update);
		}
		return update;
	}

	@Override
	@PostMapping("/itskill/fetchITSkill/{skill_id}")
	public ITSkills fetchSkillByID(@PathVariable long skill_id) {
		ITSkills its = this.itService.findITSkillById(skill_id);
		if(its != null) {
			log.info("Skill fetched by id: " + skill_id, LocalDate.now(), its);
		}else {
			log.error("Skill not found using id: " + skill_id, LocalDate.now(), its);
		}
		return its;
	}

	@Override
	@GetMapping("/itskill/fetchList/getcand/{cand_id}")
	public List<ITSkills> fetchAllSkills(@PathVariable long cand_id) {
		Candidate cand = this.candServ.findCandidate(cand_id);
		if(cand != null) {
			log.info("Candidate found and list of skill returned", LocalDate.now(), cand);
			return cand.getItSkills();
		}else {
			log.error("Candidate not found to return list of IT skills", LocalDate.now(), cand);
			return null;
		}
	}
	
	@Override
	@PostMapping("/itskill/getCand/{cand_id}/delete/{skill_id}")
	public ITSkills removeSkill(@PathVariable long cand_id,@PathVariable long skill_id) {
		ITSkills del = this.itService.findITSkillById(skill_id);
		if(this.candServ.unlinkITSkill(del, skill_id)) {
			ITSkills skill = this.itService.deleteITSkillById(skill_id);
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
