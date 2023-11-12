package com.app.ghost.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;

import com.app.ghost.exception.ExperienceNotPersistedException;
import com.app.ghost.model.Experience;
import com.app.ghost.repository.ExperienceRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ExperienceService implements IExperienceService {
	
	private ExperienceRepository expRepo;
	
	public ExperienceService(ExperienceRepository expRepo) {
		this.expRepo = expRepo;
	}

	@Override
	public Experience persistExperience(Experience exp) throws ExperienceNotPersistedException {
		try{
			log.info("Saving the Experience in database", exp);
			if(exp.getDateTo() == null) {
				exp.setTimeServed(ChronoUnit.MONTHS.between(exp.getDateFrom(), LocalDate.now()));
			}else {
				exp.setTimeServed(ChronoUnit.MONTHS.between(exp.getDateFrom(), exp.getDateTo()));
			}
			return this.expRepo.save(exp);
		}catch(Exception e) {
			throw new ExperienceNotPersistedException("Failed to persis the Experience object, Check the incomming value", e);
		}
	}

	@Override
	public Experience removeExperience(long id) {
		Experience exp = this.expRepo.findById(id).orElse(null);
		if(exp != null) {
			log.info("Deleting the Experience Record from the database", exp);
			this.expRepo.delete(exp);
			return exp;
		}else {
			log.error("Failed to find the experience object to delete the record from the database", exp);
			return exp;
		}
	}

	@Override
	public Experience updateExperience(Experience update) {
		Experience exp = this.expRepo.findById(update.getId()).orElse(null);
		if(exp != null) {
			exp.setCompanyDesignation(update.getCompanyDesignation());
			exp.setCompanyLocation(update.getCompanyLocation());
			exp.setCompanyLogo(update.getCompanyLogo());
			exp.setCompanyName(update.getCompanyName());
			exp.setDateFrom(update.getDateFrom());
			exp.setDateTo(update.getDateTo());
			exp.setTimeServed(update.getTimeServed());
			log.info("Updating the Experiencce record", exp);
			return this.expRepo.save(exp);
		}else {
			log.error("Failed to find the experience object to update", exp);
			return null;
		}
	}

	@Override
	public Experience findExperienceById(long id) {
		Experience exp = this.expRepo.findById(id).orElse(null);
		if(exp != null) log.info("returning the Experience object", exp);
		else log.error("Failed to find the Experience object", exp);
		return exp;
	}

	@Override
	public List<Experience> getallExperience() {
		log.info("Finding the list of all the Experience");
		return this.expRepo.findAll();
	}

}
