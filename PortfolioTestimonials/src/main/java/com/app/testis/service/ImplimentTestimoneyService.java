package com.app.testis.service;

import java.util.List;

import com.app.testis.model.Testimoney;

public interface ImplimentTestimoneyService {
	Testimoney addTestimoney(Testimoney testi);

	boolean deleteTestimoney(long id);

	Testimoney _addRemoveFromTop(Testimoney testi);

	List<Testimoney> getAllTestimoney();

	Testimoney getTestimoneyById(long id);
}
