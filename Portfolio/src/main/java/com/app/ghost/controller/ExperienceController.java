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
import com.app.ghost.model.Experience;
import com.app.ghost.service.CandidateService;
import com.app.ghost.service.ExperienceService;
import com.app.ghost.utils.LinkExperience;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class ExperienceController implements ImpExperienceController {

	private ExperienceService expServ;
	private CandidateService candServ;
	private LinkExperience linkExp;
	
	public ExperienceController(ExperienceService expServ, CandidateService candServ) {
		this.expServ = expServ;
		this.candServ = candServ;
		this.linkExp = new LinkExperience();
	}
	
	@Override
	@PostMapping("/experience/persist/saveExperience")
	public boolean persistExperience(@RequestBody Experience exp) {
		if(this.linkExp.persistLinkExperience(expServ, candServ, exp) != null) {
			log.info("Successfully linked the Experience object to Candidate and persisted it to the database", exp);
			return true;
		}else {
			log.error("Failed to link the experience to candidate and persist to database", exp);
			return false;
		}
	}

	@Override
	@PostMapping("/experience/delete/getCandidate/{cand_id}/getExp/{exp_id}")
	public boolean deleteExperience(@PathVariable long cand_id,@PathVariable long exp_id) {
		if(this.linkExp.deleteUnlinkExperience(expServ, candServ, cand_id, exp_id)) {
			log.info("Successfully Unlinked the objects and deleted experience with exp_id " + exp_id);
			return true;
		}else {
			log.error("Failed to unlink the experience and candidate and delete the experience");
			return false;
		}
	}

	@Override
	@PostMapping("/experience/persist/update7")
	public Experience updateExperience(@RequestBody Experience update) {
		log.info("Updating the Experience with new values.", update);
		return this.expServ.updateExperience(update);
	}

	@Override
	@PostMapping("/experience/getExperience/{exp_id}")
	public Experience getExperienceById(@PathVariable long exp_id) {
		log.info("Finding the Experience by id " + exp_id);
		return this.expServ.findExperienceById(exp_id);
	}

	@Override
	@GetMapping("/experience/fetchList/getCand/{cand_id}")
	public List<Experience> getAllExperience(@PathVariable long cand_id) {
		Candidate cand = this.candServ.findCandidate(cand_id);
		if(cand != null) {
			log.info("Found Candidate to return the list of Experience", cand);
			return this.expServ.getallExperience();
			//return cand.getExper();
		}else {
			log.error("Failed to find the candidate to return the list of experience", cand);
			return null;
		}
	}

}
