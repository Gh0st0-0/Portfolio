package com.app.ghost.controller;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ghost.model.Credentials;
import com.app.ghost.service.CandidateService;
import com.app.ghost.service.CredentialsService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class CredentialController implements ImpCredController {

	private CredentialsService credServ;
	private CandidateService candServ;

	public CredentialController(CredentialsService credServ, CandidateService candServ) {
		this.credServ = credServ;
		this.candServ = candServ;
	}

	@Override
	@GetMapping("/credentials/getcreds/{cred_id}")
	public Credentials fetchCredentials(@PathVariable long cred_id) {
		Credentials cred = this.credServ.findCreds(cred_id);
		if (cred != null) {
			log.info("Credentials found", LocalDate.now(), cred);
		} else {
			log.error("Credentials not found", LocalDate.now(), cred);
		}
		return cred;
	}

	@Override
	@PostMapping("/credentials/persist/save_cred/getcand/{cand_id}")
	public boolean credentialsPersisted(@PathVariable long cand_id, @RequestBody Credentials cred) {
		Credentials cr = this.credServ.saveCreds(cred);
		if (cr != null) {
			log.info("Credentials were persisted", cred);
			if(this.candServ.linkCreds(cred, cand_id)) {
				return true;
			}else {
				return false;
			}
		} else {
			log.error("Credentials were not persisted", cred);
			return false;
		}
	}

	@Override
	@PostMapping("/credentials/persist/update2")
	public Credentials updatedCred(@RequestBody Credentials update) {
		Credentials newCred = this.credServ.updateCreds(update);
		if (newCred != null) {
			log.info("Candidate credentials updated", newCred);
		} else {
			log.error("Candidate Credentials not updated", newCred);
		}
		return newCred;
	}

}
