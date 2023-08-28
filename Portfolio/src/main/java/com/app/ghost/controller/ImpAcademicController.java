package com.app.ghost.controller;

import java.util.List;

import com.app.ghost.model.Academics;

public interface ImpAcademicController {
	boolean persistAcademics(Academics academic);

	boolean deleteAcademicRecord(long acadmic_id);

	Academics updateAcademics(Academics update);

	Academics getAcademicsById(long id);

	List<Academics> getAllAcademics();
}
