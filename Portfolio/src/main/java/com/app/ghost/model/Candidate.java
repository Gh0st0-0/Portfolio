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

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@Table(name = "candidate")
public class Candidate extends BaseEntity {
	// Fields
	@Column(name="username")
	private String userName;
	
	@Column
	private String password;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="middle_name")
	private String middleName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="current_location")
	private String currentWorkingLocation;
	
	@Column
	private String roll;
	
	@ToString.Exclude
	@OneToOne(cascade = CascadeType.ALL) // the company with which the custome is affileated is mapped 1 to 1 as 1
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
	
}
