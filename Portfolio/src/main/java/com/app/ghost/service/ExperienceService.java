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
		if(exp != null) {
			log.info("returning the Experience object", exp);
			if(exp.getDateTo() == null) {
				long getTime = exp.getTimeServed();
				exp.setTimeServed(ChronoUnit.MONTHS.between(exp.getDateFrom(), LocalDate.now()));
				if(getTime != exp.getTimeServed()) // if the time served changes only the call the update service
					this.updateExperience(exp);
			}
		}
		else log.error("Failed to find the Experience object", exp);
		return exp;
	}

	@Override
	public List<Experience> getallExperience() {
		log.info("Finding the list of all the Experience");
		List<Experience> getExper = this.expRepo.findAll();
		for(Experience exper : getExper) {
			if(exper.getDateTo() == null) {
				log.info("Updating Served Time for current job", exper);
				long timeServed = exper.getTimeServed();
				exper.setTimeServed(ChronoUnit.MONTHS.between(exper.getDateFrom(), LocalDate.now()));
				if(timeServed != exper.getTimeServed()) // if the time served changes only then update the experience in database
					this.updateExperience(exper);
			}
		}
		return getExper;
	}

}
