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
import com.app.ghost.model.OtherSkills;
import com.app.ghost.service.CandidateService;
import com.app.ghost.service.OtherSkillService;
import com.app.ghost.utils.LinkObjects;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class OtherSkillController implements ImpOtherSkillController {
	
	private OtherSkillService othSkillServ;
	private CandidateService candServ;
	private LinkObjects persist;

	public OtherSkillController(OtherSkillService othSkillServ, CandidateService candServ) {
		this.othSkillServ = othSkillServ;
		this.candServ = candServ;
		this.persist = new LinkObjects();
	}

	@Override
	@PostMapping("/otherskill/persist/saveskill/getcand/{cand_id}")
	public boolean otherSkillPersisted(@PathVariable long cand_id,@RequestBody OtherSkills skill) {
		OtherSkills skillSave = this.othSkillServ.saveOtherSkill(this.persist.linkCandToOtherSkill(this.candServ.findCandidate(cand_id), skill));  // the candidate is persisted
																																					// in the skill list which return 
																																					// the updated skill which is saved
																																					// in the database
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
	public OtherSkills updateOtherSkill(@RequestBody OtherSkills skill) {
		OtherSkills update = this.othSkillServ.updateOtherSkill(skill);
		if(update != null) {
			log.info("Other Skills updated successfully", LocalDate.now(), update);
		}else {
			log.error("Other Skills not updated", LocalDate.now(), update);
		}
		return update;
	}

	@Override
	@PostMapping("/otherskill/fetchOtherSkill/{skill_id}")
	public OtherSkills fetchSkillById(@PathVariable long skill_id) {
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
	public List<OtherSkills> fetchAllOtherSkills(@PathVariable long cand_id) {
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
	public OtherSkills removeOSkill(@PathVariable long cand_id,@PathVariable long skill_id) {
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
