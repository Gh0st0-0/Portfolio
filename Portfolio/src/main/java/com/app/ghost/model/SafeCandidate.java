package com.app.ghost.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SafeCandidate {
	private String firstName;

	private String middleName;

	private String lastName;

	private String currentWorkingLocation;

	private String roll;

	private Credentials sCreds;

//	private List<ITSkills> sItSkills = null;
//
//	private List<OtherSkills> sOtherSkills = null;
//
//	private List<Projects> sProjects = null;
//	
//	private List<Academics> sAcademics = null;
//	
//	private List<Experience> sExper = null;
}
