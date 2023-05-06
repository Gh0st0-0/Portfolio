package com.app.ghost.controller;

import java.util.List;

import com.app.ghost.model.ProjectImages;
import com.app.ghost.model.Projects;

public interface ImpProjectController {
	boolean ProjectPersist(Projects proj, long cand_id);

	Projects updateProject(Projects proj);

	Projects fetchProjectByID(long proj_id);

	List<Projects> fetchAllProjects(long cand_id);

	Projects removeProject(long cand_id, long proj_id);
	
	boolean addImage(long proj_id, ProjectImages pi);
	
	boolean removeImage(long proj_id, long img_id);
}
