package com.app.ghost.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Table(name = "projects")
public class Projects extends BaseEntity {
	@Column
	private String projectTitle;
	@Column
	private String affeleatedCompany;
	@Column
	private String discription;
	@Column
	private String releventLinks;
	@Column
	private LocalDate projectStartDate;
	@Column
	private LocalDate projectEndDate;
	@Column
	private int projectDuration;
	@Column
	private String projectRole;
	@Column
	private String responsibility;
	
	@OneToMany(mappedBy = "proj")
	@ToString.Exclude
	private List<ProjectImages> images = new ArrayList<ProjectImages>();
	@Column
	private String technologiesUsed;

	@ManyToOne
	@JoinColumn(name = "cand_id")
	@JsonIgnore
	@ToString.Exclude
	private Candidate cand3;

	// Helper Methods
	public boolean addImage(ProjectImages image) {
		return this.images.add(image);
	}
	
	public boolean removeImage(ProjectImages i) {
		return this.images.remove(i);
	}
}
