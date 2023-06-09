package com.app.ghost.service;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.app.ghost.model.ProjectImages;
import com.app.ghost.repository.ProjectImageRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ProjectImageService implements IProjectImageService {
	
	private ProjectImageRepository imgRepo;

	public ProjectImageService(ProjectImageRepository imgRepo) {
		this.imgRepo = imgRepo;
	}

	@Override
	public ProjectImages findImageById(long id) {
		ProjectImages image = this.imgRepo.findById(id).orElse(null);
		if(image != null) {
			log.info("Image found and returned", LocalDate.now(), image);
		}else {
			log.error("Cant find image null returned: ", LocalDate.now(), image);
		}
		return image;
	}
	
	@Override
	public ProjectImages addImage(ProjectImages image) {
		return this.imgRepo.save(image);
	}
	
	@Override
	public ProjectImages removeImage(long id) {
		ProjectImages image = this.imgRepo.findById(id).orElse(null);
		if(image != null) {
			log.info("image found to be removed", LocalDate.now(), image);
			this.imgRepo.delete(image);
		}else {
			log.error("Image not found: ", LocalDate.now(), image);
		}
		return image;
	}
	
//	public boolean removeAllProjectImages() {
//		this.imgRepo.
//	}

}
