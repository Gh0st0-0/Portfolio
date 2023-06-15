package com.app.testis.controller;

import java.util.List;

import com.app.testis.model.Testimoney;

public interface ImplimentTestimoneyController {
	boolean saveTestimoney(Testimoney testi);

	boolean removeTestimoney(Testimoney testi);

	Testimoney addRemoveFromTop(Testimoney testi);

	List<Testimoney> fetchAllTestimonies();

	Testimoney findTestimoneyById(long test_id);
}
