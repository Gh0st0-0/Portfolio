package com.app.ghost.controller;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ghost.model.Candidate;
import com.app.ghost.service.CandidateService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class CandidateController implements ImpCandidateController {
	
	private CandidateService candSer;
	
//  Autowired DI
	public CandidateController(CandidateService candSer) {
		this.candSer = candSer;
	}

	@Override
	@GetMapping("/candidate/getcandidate/{cand_id}")
	public Candidate fetchCandidate(@PathVariable long cand_id) {
		Candidate person = this.candSer.findCandidate(cand_id);
		if(person != null) {
			log.info("Person found", LocalDate.now(), person);
		}else {
			log.error("Person Not found", LocalDate.now(), person);
		}
		return person;
	}

	@Override
	@PostMapping("/candidate/persist/register")
	public boolean candidatePersisted(@RequestBody Candidate person) {
		if(this.candSer.saveCandidate(person)) {
			log.info("Candidate Saved", LocalDate.now(), person);
			return true;
		}else {
			log.error("Candidate not saved", LocalDate.now(), person);
			return false;
		}
	}

	@Override
	@PostMapping("/candidate/persist/update")
	public Candidate candidateUpdated(@RequestBody Candidate updated) {
		Candidate updatedCandidate = this.candSer.updateCandidate(updated);
		if(updatedCandidate != null) {
			log.info("Candidated Updated Successfully", LocalDate.now(), updatedCandidate);
		}else {
			log.error("Candidate not updated", LocalDate.now(), updatedCandidate);
		}
		return updatedCandidate;
	}

	@Override
	@PostMapping("/candidate/login")
	public boolean login(@RequestBody Candidate logcan) {
		Candidate logCandidate = this.candSer.loginByUsernameAndPassword(logcan.getUserName(), logcan.getPassword());
		if(logCandidate != null) {
			log.info("Successful login", LocalDate.now(), logCandidate);
			return true;
		}else {
			log.error("Unsuccessful login", LocalDate.now(), logCandidate);
			return false;
		}
	}

}
