package com.app.ghost.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity // To specify that this class is an entity
@Data // From Lombok
@EqualsAndHashCode(callSuper = false) // prevent the equals and hash code of the super class from being called
@NoArgsConstructor // Lombok generate a parameterless constructor
@Table(name = "candidate") // Specify the properties and attributes of the table
public class Candidate extends BaseEntity {
	// Fields
	@Column(name="username")
	private String userName; // Stores the userName
	
	@Column
	private String password; // Stores the password 
	
	@Column(name="first_name")
	private String firstName; // Stores the first name
	
	@Column(name="middle_name")
	private String middleName; // Stores the middle name
	
	@Column(name="last_name")
	private String lastName; // Stores the last name
	
	@Column(name="current_location")
	private String currentWorkingLocation; // Stores the current working locations
	
	@Column
	private String roll; // Stores the roll
	
	// Associated fields
	
	@ToString.Exclude
	@OneToOne(cascade = CascadeType.ALL) // the company with which the custom is affiliated is mapped 1 to 1 as 1
										// customer belong to 1 company
	@JoinColumn(name = "creds_id")
	private Credentials creds; 
	
	@ToString.Exclude
	@OneToMany(mappedBy = "cand")
	private List<ITSkills> itSkills = new ArrayList<ITSkills>();
	
	@ToString.Exclude
	@OneToMany(mappedBy = "cand2")
	private List<OtherSkills> otherSkills = new ArrayList<OtherSkills>();
	
	@ToString.Exclude
	@OneToMany(mappedBy = "cand3")
	private List<Projects> projects = new ArrayList<>();
	
	@ToString.Exclude
	@OneToMany(mappedBy = "_cand")
	private List<Academics> acadmics = new ArrayList<>();
	
	@ToString.Exclude
	@OneToMany(mappedBy = "_candi")
	private List<Experience> exper = new ArrayList<>();
	
	// Helper methods
	public boolean addITSkill(ITSkills skill) {
		return this.itSkills.add(skill);
	}
	
	public boolean removeITSkill(ITSkills skill) {
		return this.itSkills.remove(skill);
	}
	
	
	public boolean addOtherSkills(OtherSkills skills) {
		return this.otherSkills.add(skills);
	}
	
	
	public boolean removeOtherSkills(OtherSkills skill) {
		return this.otherSkills.remove(skill);
	}
	
	public boolean addProject(Projects proj) {
		return this.projects.add(proj);
	}
	
	public boolean removeProject(Projects proj) {
		return this.projects.remove(proj);
	}
	
	public boolean addAcadmics(Academics adac) {
		return this.acadmics.add(adac);
	}
	
	public boolean removeAcadmics(Academics acad) {
		return this.acadmics.remove(acad);
	}
	
	public boolean addExperience(Experience expi) {
		return this.exper.add(expi);
	}
	
	public boolean removeExperience(Experience expi) {
		return this.exper.remove(expi);
	}
}
