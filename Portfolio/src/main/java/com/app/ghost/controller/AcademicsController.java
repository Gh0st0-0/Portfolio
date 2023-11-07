package com.app.ghost.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ghost.model.Academics;
import com.app.ghost.model.Candidate;
import com.app.ghost.service.AcadmicService;
import com.app.ghost.service.CandidateService;
import com.app.ghost.utils.LinkAcadmics;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class AcademicsController implements ImpAcademicController {
	
	private LinkAcadmics acadLink;
	private CandidateService candServ;
	private AcadmicService acadServ;
	
	public AcademicsController(CandidateService candServ, AcadmicService acadServ) {
		this.acadLink = new LinkAcadmics();
		this.candServ = candServ;
		this.acadServ = acadServ;
	}

	@Override
	@PostMapping("/academics/persist/saveAcademics/getcand/{cand_id}")
	public boolean persistAcademics(@RequestBody Academics academic) {
		if(acadLink.persistLinkAcadmics(acadServ, candServ, academic) == null) {
			log.error("Failed to persist the Academics", academic);
			return false;
		}else {
			log.info("Successfully linked and persisted the Academics", academic);
			return true;
		}
	}

	@Override
	@PostMapping("/academics/getCand/{cand_id}/delete/{acadmic_id}")
	public boolean deleteAcademicRecord(@PathVariable long cand_id,@PathVariable long acadmic_id) {
		return acadLink.deleteUnlinkAcademics(acadServ, candServ, cand_id, acadmic_id);
	}

	@Override
	@PostMapping("/academics/persist/update6")
	public Academics updateAcademics(@RequestBody Academics update) {
		return acadServ.updateAcadmicDetail(update);
	}

	@Override
	@PostMapping("/academics/getAcademics/{acad_id}")
	public Academics getAcademicsById(@PathVariable long acad_id) {
		return acadServ.findAcadmicHistoryById(acad_id);
	}

	@Override
	@GetMapping("/academics/fetchList/getCand/{cand_id}")
	public List<Academics> getAllAcademics(@PathVariable long cand_id) {
		Candidate cand = this.candServ.findCandidate(cand_id);
		if (cand != null) {
			log.info("Candidate found and list of Academics returned", cand);
			return cand.getAcadmics();
		}else {
			log.error("Failed to fetch the candidate to return the Academic list", cand);
			return null;
		}
	}

}
