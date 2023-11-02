package com.app.ghost.service;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.app.ghost.model.Academics;
import com.app.ghost.model.Candidate;
import com.app.ghost.model.Credentials;
import com.app.ghost.model.Experience;
import com.app.ghost.model.ITSkills;
import com.app.ghost.model.OtherSkills;
import com.app.ghost.model.Projects;
import com.app.ghost.repository.CandidateRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CandidateService implements ICandidateService {

	private CandidateRepository candRepo;

	public CandidateService(CandidateRepository candRepo) {
		this.candRepo = candRepo;
	}

	/*
	 * if the Candidate is saved successfully the method returns true, if not then
	 * false
	 */
	@Override
	public boolean saveCandidate(Candidate newCandidate) {
		log.info("Saved New Candidate: ", LocalDate.now(), newCandidate);
		Candidate a = this.candRepo.save(newCandidate);
		if (a != null)
			return true;
		else
			return false;
	}

	/*
	 * Candidate is updated if updated successfully return the new updated candidate
	 * if not then return null
	 */
	@Override
	public Candidate updateCandidate(Candidate updated) {
		Candidate temp = this.candRepo.findById(updated.getId()).orElse(null);
		if (temp != null) {
			temp.setFirstName(updated.getFirstName());
			temp.setMiddleName(updated.getMiddleName());
			temp.setLastName(updated.getLastName());
			temp.setUserName(updated.getUserName());
			temp.setCurrentWorkingLocation(updated.getCurrentWorkingLocation());
			temp.setCreds(updated.getCreds());
			log.info("Updated The Candidate: ", LocalDate.now(), updated);
			return this.candRepo.save(temp);
		} else {
			log.error("Candidate is not Persistant: ", LocalDate.now(), temp);
			// Custom Exception here
			return null;
		}
	}

	/*
	 * find the candidate and return it if found, else return null
	 */
	@Override
	public Candidate findCandidate(long id) {
		return this.candRepo.findById(id).orElse(null); // throws Custom Exception
	}

	/*
	 * Login using userName and password return the candidate if successful and
	 * return null if failed
	 */
	@Override
	public Candidate loginByUsernameAndPassword(String userName, String password) {
		// Throws Custom Exception
		return this.candRepo.findCandidateByUserNameAndPassword(userName, password).orElse(null);
	}

	/*
	 * Link the creds to the candidate if successful return true else false
	 */
	@Override
	public boolean linkCreds(Credentials creds, long id) {
		Candidate cand = this.candRepo.findById(id).orElse(null);
		if (cand != null) {
			cand.setCreds(creds);
			this.candRepo.save(cand);
			log.info("Candidate found and credentials linked", LocalDate.now(), cand);
			return true;
		} else {
			log.error("Credentials not found to link", LocalDate.now(), cand);
			return false;
		}
	}

	/*
	 * Link the ITSkills to the candidate if successful return true else false
	 */
	@Override
	public boolean linkITSkill(ITSkills skill, long id) {
		Candidate cand = this.candRepo.findById(id).orElse(null);
		if (cand != null) {
			if (cand.addITSkill(skill)) {
				log.info("New Skill Linked to the Candidate Successfully", LocalDate.now(), skill);
				return true;
			} else {
				log.error("Skill not linked to the candidate", LocalDate.now(), skill);
				return false;
			}
		} else {
			log.error("Candidate not found to link the ITSkill", LocalDate.now(), cand);
			return false;
		}
	}

	/*
	 * Unlink the ITSkills to the candidate if successful return true else false
	 */
	@Override
	public boolean unlinkITSkill(ITSkills skill, long cand_id) {
		Candidate cand = this.candRepo.findById(cand_id).orElse(null);
		if (cand != null) {
			log.info("Candidate found to remove the ITSkill", LocalDate.now(), cand);
			if (cand.removeITSkill(skill)) {

				log.info("IT Skill removed successfully", LocalDate.now(), skill);
				return true;
			} else {
				log.error("Failed to unlink the ITSkill", LocalDate.now(), skill);
				return false;
			}
		} else {
			log.error("Failed to locate the candidate to unlink the IT skill", LocalDate.now(), cand);
			return false;
		}
	}

	/*
	 * Link the Other Skills to the candidate if successful return true else false
	 */
	@Override
	public boolean linkOtherSkill(OtherSkills skill, long cand_id) {
		Candidate cand = this.candRepo.findById(cand_id).orElse(null);
		if (cand != null) {
			if (cand.addOtherSkills(skill)) {
				log.info("New Skill Linked to the Candidate Successfully", LocalDate.now(), cand);
				return true;
			} else {
				log.error("Skill not linked to the candidate", LocalDate.now(), cand);
				return false;
			}
		} else {
			log.error("Failed to locate the candidate to link the Other skill", LocalDate.now(), cand);
			return false;
		}
	}

	/*
	 * Unlink the Other Skills to the candidate if successful return true else false
	 */
	@Override
	public boolean unlinkOtherSkill(OtherSkills skill, long cand_id) {
		Candidate cand = this.candRepo.findById(cand_id).orElse(null);
		if (cand != null) {
			log.info("Candidate found to remove the Other Skill", LocalDate.now(), cand);
			if (cand.removeOtherSkills(skill)) {
				log.info("Other Skill removed successfully", LocalDate.now(), skill);
				return true;
			} else {
				log.error("Failed to unlink the Other Skill", LocalDate.now(), skill);
				return false;
			}
		} else {
			log.error("Failed to locate the candidate to unlink the Other skill", LocalDate.now(), cand);
			return false;
		}
	}

	/*
	 * Link the Projects to the candidate if successful return true else false
	 */
	@Override
	public boolean linkProject(Projects proj, long cand_id) {
		Candidate cand = this.candRepo.findById(cand_id).orElse(null);
		if (cand != null) {
			if (cand.addProject(proj)) {
				log.info("Project linked successfully", LocalDate.now(), proj);
				return true;
			} else {
				log.error("Failed to link project", LocalDate.now(), proj);
				return false;
			}
		} else {
			log.error("Failed to locate the candidate to link the project", LocalDate.now(), cand);
			return false;
		}
	}

	/*
	 * Unlink the Projects to the candidate if successful return true else false
	 */
	@Override
	public boolean unlinkProject(Projects proj, long cand_id) {
		Candidate cand = this.candRepo.findById(cand_id).orElse(null);
		if (cand != null) {
			if (cand.removeProject(proj)) {
				log.info("Project unlinked succesfully", proj);
				return true;
			} else {
				log.error("Failed to unlink project", proj);
				return false;
			}
		} else {
			log.error("Failed to locate the candidate to unlink the project", cand);
			return false;
		}
	}

	@Override
	public boolean linkAcademics(Academics acad, long cand_id) {
		Candidate cand = this.candRepo.findById(cand_id).orElse(null);
		if(cand != null) {
			if(cand.addAcadmics(acad)) {
				log.info("Acadmics linked Successfully", acad);
				return true;
			}else {
				log.error("Failed to link the Acadmics to candidate", acad);
			}
		}else {
			log.error("Failed to locate the Candidate to link the acadmics");
		}
		return false;
	}

	@Override
	public boolean unlinkAcademics(Academics acad, long cand_id) {
		Candidate cand = this.candRepo.findById(cand_id).orElse(null);
		if(cand != null) {
			if(cand.removeAcadmics(acad)) {
				log.info("Acadmics unlinked Successfully", acad);
				return true;
			}else {
				log.error("Failed to unlink the Acadmics to candidate", acad);
			}
		}else {
			log.error("Failed to locate the Candidate to unlink the acadmics");
		}
		return false;
	}
	
	@Override
	public boolean linkExperience(Experience expi, long cand_id) {
		Candidate cand = this.candRepo.findById(cand_id).orElse(null);
		if(cand != null) {
			if(cand.addExperience(expi)) {
				log.info("Experience object linked to the Candidate", cand);
				return true;
			}else {
				log.error("Failed to link the Experience object to the candidate object", expi);
			}
		}else {
			log.error("Failed to find the candidate object to link the Experience object", cand);
		}
		return false;
	}
	
	@Override
	public boolean unlinkExperience(Experience expi, long cand_id) {
		Candidate cand =  this.candRepo.findById(cand_id).orElse(null);
		if(cand != null) {
			if(cand.removeExperience(expi)) {
				log.info("Experience object unlinked from candidate", cand);
				return true;
			}else {
				log.error("Failed to unlink the experience from candidate", expi);
			}
		}else {
			log.error("Failed to find the candidate object", cand);
		}
		return false;
	}

}
