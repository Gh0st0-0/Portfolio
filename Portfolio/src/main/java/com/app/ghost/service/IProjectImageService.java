package com.app.ghost.service;

import com.app.ghost.model.ProjectImages;

public interface IProjectImageService {
	ProjectImages findImageById(long id);

	ProjectImages addImage(ProjectImages image);

	ProjectImages removeImage(long id);
	
//	boolean removeAllImages();
}
