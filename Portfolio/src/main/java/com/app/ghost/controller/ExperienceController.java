package com.app.ghost.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

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
	public boolean persistExperience(Experience exp) {
		
		return false;
	}

	@Override
	public boolean deleteExperience(long cand_id, long exp_id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Experience updateExperience(Experience update) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Experience getExperienceById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Experience> getAllExperience(long cand_id) {
		// TODO Auto-generated method stub
		return null;
	}

}
