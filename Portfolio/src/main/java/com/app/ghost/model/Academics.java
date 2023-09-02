package com.app.ghost.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@Table
public class Academics extends BaseEntity {

	@Column
	private String collegeSchoolName;

	@Column(name = "grade_std")
	private String stdGrade;

	@Column(name = "score_cgpa")
	private String scoreCGPA;

	@Column
	private String yearOfPassing;

	@Column
	private String field;

	@Column
	private String cretificate;
	
	@Column
	private String website;
	
	@ManyToOne
	@JoinColumn(name = "cand_id")
	@JsonIgnore
	@ToString.Exclude
	private Candidate _cand;
}
