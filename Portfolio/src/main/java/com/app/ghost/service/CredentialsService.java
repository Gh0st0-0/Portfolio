package com.app.ghost.service;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.app.ghost.model.Credentials;
import com.app.ghost.repository.CredentialsRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CredentialsService implements ICredentialsService {
	
	private CredentialsRepository credRepo;

	public CredentialsService(CredentialsRepository credRepo) {
		this.credRepo = credRepo;
	}

	/*
	 * Persist Credentials and return the credentials object
	 */
	@Override
	public Credentials saveCreds(Credentials credNew) {
		log.info("Saved the credentials: ", LocalDate.now(), credNew);
		return this.credRepo.save(credNew);
	}

	/*
	 * update the credentials and return the updated objects
	 */
	@Override
	public Credentials updateCreds(Credentials updated) {
		Credentials cred = this.credRepo.findById(updated.getId()).orElse(null);
		if(cred != null) {
			cred.setPrimaryNo(updated.getPrimaryNo());
			cred.setSecondryNo(updated.getSecondryNo());
			cred.setEmail(updated.getEmail());
			cred.setLinkedin(updated.getLinkedin());
			cred.setHackerRank(updated.getHackerRank());
			log.info("Credentials updated: ", LocalDate.now(), cred);
			return this.credRepo.save(cred);
		}else {
			log.error("The Credential object is not persistant: ", LocalDate.now(), cred);
			// Custom Exception here
			return null;
		}
	}

	/*
	 * Find credentials from the given id
	 */
	@Override
	public Credentials findCreds(long id) {
		// throws Custom Exception
		return this.credRepo.findById(id).orElse(null);
	}

}
