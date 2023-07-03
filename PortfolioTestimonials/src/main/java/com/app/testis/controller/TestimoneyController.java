package com.app.testis.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.testis.model.Testimoney;
import com.app.testis.service.TestimoneyService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin("*")
@Transactional
@Slf4j
public class TestimoneyController implements ImplimentTestimoneyController {

	private TestimoneyService testServ;

	public TestimoneyController(TestimoneyService testServ) {
		this.testServ = testServ;
	}

	@Override
	@PostMapping("/testimoney/persist-testimoney")
	public boolean saveTestimoney(@RequestBody Testimoney testi) {
		log.info("Adding the testimoney to the database", testi);
		return this.saveTestimoney(testi);
	}

	@Override
	@PostMapping("/testimoney/delete-testimoney")
	public boolean removeTestimoney(@RequestBody Testimoney testi) {
		log.info("deleting the testimoney from the database", testi);
		return this.testServ.deleteTestimoney(testi.getId());
	}

	@Override
	@PostMapping("/testimoney/persist/addremoveTop")
	public Testimoney addRemoveFromTop(@RequestBody Testimoney testi) {
		Testimoney edit = this.testServ._addRemoveFromTop(testi);
		if (edit == null) {
			log.error("Call to update the testimoney failed", testi);
			return null;
		} else {
			log.info("Call to update the testimoney", edit);
			return edit;
		}
	}

	@Override
	@GetMapping("/testimony/getallTestimoney")
	public List<Testimoney> fetchAllTestimonies() {
		log.info("Call to fetch all the testimonies");
		return this.testServ.getAllTestimoney();
	}

	@Override
	@GetMapping("/testimony/getTestimoney/{test_id}")
	public Testimoney findTestimoneyById(@PathVariable long test_id) {
		log.info("Call to fetch testimoney using id " + test_id);
		return this.testServ.getTestimoneyById(test_id);
	}

}
