package com.app.ghost.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.ghost.exception.AcadmicsNotPersistedException;
import com.app.ghost.model.Academics;
import com.app.ghost.repository.AcadmicRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class AcadmicService implements IAcadmicService {
//	Injecting the repository object
	private AcadmicRepository acadRepo;

	public AcadmicService(AcadmicRepository acadRepo) {
		this.acadRepo = acadRepo;
	}

	/*
	 * Persists the Academics and return the saved object
	 */
	@Override
	public Academics persistAcadmics(Academics acadmic) throws AcadmicsNotPersistedException {
		try {
			log.info("Saving the Academic Record", acadmic);
			return this.acadRepo.save(acadmic);
		} catch (Exception e) {
//			when the transient entity is null or the entity uses the optimistic locking 
//			system and clashes occurs
			log.error("Failed to save the Academic record", acadmic);
			throw new AcadmicsNotPersistedException("Failed to persist the Academics", e);
		}
	}

	/*
	 * remove the Academics from the history and return the saved object
	 */
	@Override
	public Academics removeAcadmicFromHistory(long id) {
		Academics acad = this.acadRepo.findById(id).orElse(null);
		if (acad != null) {
			log.info("Found the academic record", acad);
			this.acadRepo.delete(acad);
		} else {
			log.error("Failed to locate the Academic Object", acad);
		}
		return acad;
	}

	/*
	 * Update the academic object and return the updated object
	 */
	@Override
	public Academics updateAcadmicDetail(Academics acadmic) {
		Academics updated = this.acadRepo.findById(acadmic.getId()).orElse(null);
		if (updated != null) {
			updated.setCollegeSchoolName(acadmic.getCollegeSchoolName());
			updated.setStdGrade(acadmic.getStdGrade());
			updated.setScoreCGPA(acadmic.getScoreCGPA());
			updated.setYearOfPassing(acadmic.getYearOfPassing());
			updated.setField(acadmic.getField());
			updated.setCretificate(acadmic.getCretificate());
			log.info("Updated Academic details", updated);
			return this.acadRepo.save(updated);
		} else {
			log.error("Failed to retrive the Academic object", updated);
			return null;
		}
	}

	/*
	 * Finding the academic object using the id
	 */
	@Override
	public Academics findAcadmicHistoryById(long id) {
		log.info("Finding the Academic object using the id", id);
		return this.acadRepo.findById(id).orElse(null);
	}

	@Override
	public List<Academics> getFullAcadmicHestory() {
		log.info("Returning the list of all the Academics");
		return this.acadRepo.findAll();
	}

}
