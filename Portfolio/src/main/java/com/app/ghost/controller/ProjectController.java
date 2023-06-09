package com.app.ghost.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ghost.model.Candidate;
import com.app.ghost.model.ProjectImages;
import com.app.ghost.model.Projects;
import com.app.ghost.service.CandidateService;
import com.app.ghost.service.ProjectImageService;
import com.app.ghost.service.ProjectService;
import com.app.ghost.utils.LinkObjects;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin("*")
@Transactional
public class ProjectController implements ImpProjectController {

	private CandidateService candSer;
	private ProjectService projServ; 
	private ProjectImageService imgServ;
	private LinkObjects persist;

	public ProjectController(CandidateService candSer, ProjectService projServ, ProjectImageService imgServ) {
		this.candSer = candSer;
		this.projServ = projServ;
		this.imgServ = imgServ;
		this.persist = new LinkObjects();
	}

	@Override
	@PostMapping("/project/persist/getCand/{cand_id}")
	public Projects ProjectPersist(@RequestBody Projects proj,@PathVariable long cand_id) {
		Candidate cand = this.candSer.findCandidate(cand_id);
		if(cand != null) {
			log.info("Fetched the candidate to save the project: ", cand);
			proj.setCand3(cand);
			cand.addProject(this.projServ.saveProject(proj));
			this.candSer.saveCandidate(cand);
			return proj;
		}else {
			log.error("Failed to fetch the candidate: ", cand);
			return null;
		}
	}

	@Override
	@PostMapping("/project/persist/update5")
	public Projects updateProject(@RequestBody Projects proj) {
		Projects update = this.projServ.updateProject(proj);
		if(update != null) {
			log.info("Project updated successfully", update);
		}else {
			log.error("Failed to update the project", update);
		}
		return update;
	}

	@Override
	@PostMapping("/project/getProject/{proj_id}")
	public Projects fetchProjectByID(@PathVariable long proj_id) {
		Projects proj = this.projServ.findProjectById(proj_id);
		if(proj != null) {
			log.info("Returned the project by project id " + proj_id, proj);
		}else {
			log.error("Failed to locate the project with the id " + proj_id, proj);
		}
		return proj;
	}

	@Override
	@PostMapping("/project/AllProjects/getCand/{cand_id}")
	public List<Projects> fetchAllProjects(@PathVariable long cand_id) {
		Candidate cand = this.candSer.findCandidate(cand_id);
		if(cand != null) {
			log.info("Returning the list of all the projects", cand);
			return cand.getProjects();
		}else {
			log.error("Failed to locate the candidate ", cand);
			return null;
		}
	}

	@Override
	@PostMapping("/project/getCandidate/{cand_id}/getProject/{proj_id}")
	public Projects removeProject(@PathVariable long cand_id,@PathVariable long proj_id) { 
		// first remove image and unlink image : setImages = null
		// 
		Projects proj = this.projServ.findProjectById(proj_id);
		if(proj != null) {
			log.info("Project located to be deleted", proj);
			for(ProjectImages pi : proj.getImages()) {
				this.imgServ.removeImage(pi.getId());
			}
			proj.setImages(null); 
			if(this.candSer.unlinkProject(this.projServ.deleteProjectById(proj_id), cand_id)) {
				log.info("Unlinked the project with the candidate", proj);
				return this.projServ.deleteProjectById(proj_id);
			}else {
				log.error("Failed to unlink the project from the candidate", proj);
				return null;
			}
		}else {
			log.error("Failed to locate the project to be deleted", proj);
			return proj;
		}
	}

	@Override
	@PostMapping("/project/image/getProject/{proj_id}")
	public boolean addImage(@PathVariable long proj_id,@RequestBody ProjectImages pi) {
		Projects proj = this.projServ.findProjectById(proj_id);
		if(proj != null) {
			log.info("Fetched project with the project id: " + proj_id, proj);
			if(proj.addImage(this.imgServ.addImage(this.persist.linkProjectToImage(proj, pi)))) {
				log.info("Image Added to the database and linked with te project successfully", pi);
				return true;
			}else {
				log.error("Project image not persisted/ Failed to link: ", pi );
			}
		}else {
			log.error("Failed to locate the project with the id " + proj_id, proj);
		}
		return false;
	}

	@Override
	@PostMapping("/project/getProject/{proj_id}/getImage/{img_id}")
	public boolean removeImage(@PathVariable long proj_id,@PathVariable long img_id) {
		Projects proj = this.projServ.findProjectById(proj_id);
		if(proj != null) {
			if(proj.removeImage(this.imgServ.removeImage(img_id))) {
				log.info("Image Removed from the project successfully", proj);
				return true;
			}else {
				log.error("Failed to unlink the image from the project: ", proj);
				return false;
				
			}
		}else {
			log.error("Failed to fetch the project to unlink the image: ", proj);
			return false;
		}
	}

}
