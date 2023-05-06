package com.app.ghost.service;

import java.util.List;

import com.app.ghost.model.ProjectImages;
import com.app.ghost.model.Projects;

public interface IProjectService {
	List<Projects> findAllProjects();

	Projects findProjectById(long id);

	Projects saveProject(Projects newProject);

	Projects updateProject(Projects update);

	Projects deleteProjectById(long id);
	
	Projects addProjectImages(ProjectImages urls, long id);
	
	Projects removeProjectImage(long projectId, long imageId);
}
