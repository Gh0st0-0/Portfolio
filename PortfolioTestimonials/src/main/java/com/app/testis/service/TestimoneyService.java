package com.app.testis.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.testis.model.Testimoney;
import com.app.testis.repository.TestimonyRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TestimoneyService implements ImplimentTestimoneyService {
	
	private TestimonyRepository testiRepo;
	
	public TestimoneyService(TestimonyRepository testiRepo) {
		this.testiRepo = testiRepo;
	}

	@Override
	public Testimoney addTestimoney(Testimoney testi) {
		log.info("Saving the Testimoney in the Database");
		return this.testiRepo.save(testi);
	}

	@Override
	public boolean deleteTestimoney(long id) {
		Testimoney testi = this.testiRepo.findById(id).orElse(null);
		if(testi == null) {
			log.error("Failed to delete the Testimoney using the Id " + id);
			return false;
		}else{
			this.testiRepo.delete(testi);
			log.info("Testimoney deleted successfully using the id " + id, testi);
			return true;
		}
	}

	@Override
	public Testimoney _addRemoveFromTop(Testimoney testi) {
		log.info("Finding the Testimoney to edit", testi);
		Testimoney top = this.testiRepo.findById(testi.getId()).orElse(null);
		if(top == null) {
			log.error("Failed to find the testimoney to edit", testi);
			return null;
		}else {
			log.info("testimoney fetched to be edited", top);
			top.setShowAtTop(testi.isShowAtTop());
			return this.testiRepo.save(top);
		}
	}

	@Override
	public List<Testimoney> getAllTestimoney() {
		log.info("Finding all the testimonies in the database");
		return this.testiRepo.findAll();
	}

	@Override
	public Testimoney getTestimoneyById(long id) {
		log.info("Fetching the testimoney using the id " + id);
		return this.testiRepo.findById(id).orElse(null);
	}

}
