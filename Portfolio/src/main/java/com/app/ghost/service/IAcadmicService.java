package com.app.ghost.service;

import java.util.List;

import com.app.ghost.exception.AcadmicsNotPersistedException;
import com.app.ghost.model.Academics;

public interface IAcadmicService {
	Academics persistAcadmics(Academics acadmic) throws AcadmicsNotPersistedException;

	Academics removeAcadmicFromHistory(long id);

	Academics updateAcadmicDetail(Academics acadmic);

	Academics findAcadmicHistoryById(long id);

	List<Academics> getFullAcadmicHestory();
}
