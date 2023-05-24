package com.app.ghost.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.app.ghost.model.ProjectImages;
import com.app.ghost.model.Projects;
import com.app.ghost.repository.ProjectImageRepository;
import com.app.ghost.repository.ProjectsRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ProjectService implements IProjectService {

	private ProjectsRepository projRepo;
	private ProjectImageRepository proImRepo;

	public ProjectService(ProjectsRepository projRepo, ProjectImageRepository proImRepo) {
		this.projRepo = projRepo;
		this.proImRepo = proImRepo;
	}

	@Override
	public List<Projects> findAllProjects() {
		return this.projRepo.findAll();
	}

	@Override
	public Projects findProjectById(long id) {
		Projects proj = this.projRepo.findById(id).orElse(null);
		if(proj != null) {
			log.info("Fetching Project Returns: ", proj);
		}else {
			log.error("Fetching Project Returns: ", proj);
		}
		return proj;
	}

	@Override
	public Projects saveProject(Projects newProject) {
		return this.projRepo.save(newProject);
	}

	@Override
	public Projects updateProject(Projects update) {
		Projects proj = this.projRepo.findById(update.getId()).orElse(null);
		if(proj != null) {
			proj.setProjectTitle(update.getProjectTitle());
			proj.setAffeleatedCompany(update.getAffeleatedCompany());
			proj.setDiscription(update.getDiscription());
			proj.setReleventLinks(update.getReleventLinks());
			proj.setProjectStartDate(update.getProjectStartDate());
			proj.setProjectEndDate(update.getProjectEndDate());
			proj.setProjectDuration(update.getProjectDuration());
			proj.setProjectRole(update.getProjectRole());
			proj.setResponsibility(update.getResponsibility());
			proj.setTechnologiesUsed(update.getTechnologiesUsed());
			log.info("Project updatef", LocalDate.now(), proj);
			return proj;
		}else {
			log.error("Error in fetching project for update: ", LocalDate.now(), proj);
			return proj;
		}
	}

	@Override
	public Projects deleteProjectById(long id) {
		Projects proj = this.projRepo.findById(id).orElse(null);
		if(proj != null) {
			log.info("Deleting the project: ", LocalDate.now(), proj);
			this.projRepo.delete(proj);
			return proj;
		}else {
			log.error("Project with id " + id + " doesnot exists and returns ", LocalDate.now(), proj);
			return proj;
		}
	}

	@Override
	public Projects addProjectImages(ProjectImages urls, long id) {
		Projects proj = this.projRepo.findById(id).orElse(null);
		if(proj != null) {
			log.info("Project is fetched and image is being added", LocalDate.now(), proj);
			if(proj.addImage(urls)) {
				log.info("Image Added successfully to the project", LocalDate.now(), proj);
				this.projRepo.save(proj);
				return proj; 
			}else {
				log.error("Error in saving the image", LocalDate.now(), proj);
				return null;
			}
		}else {
			log.error("Error in Fetching the project", LocalDate.now(), proj);
			return proj;
		}
	}

	@Override
	public Projects removeProjectImage(long projectId, long imageId) {
		Projects proj = this.projRepo.findById(projectId).orElse(null);
		if(proj != null) {
			log.info("Project Found to remove Image", LocalDate.now(), proj);
			ProjectImages pi = this.proImRepo.findById(imageId).orElse(null);
			if(pi != null) {
				if(proj.removeImage(pi)) {
					log.info("Image REmoved Successfully", LocalDate.now(), proj);
				}else {
					log.error("Failed to remove image", LocalDate.now(), pi);
				}
			}else {
				log.error("Image to be deleted not found", LocalDate.now(), pi);
			}
		}else {
			log.error("Project to delete image is not found", LocalDate.now(), proj);
		}
		return proj;
	}

	
	
}
