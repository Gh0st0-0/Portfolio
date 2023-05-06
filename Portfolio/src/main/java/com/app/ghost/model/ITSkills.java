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
@Table(name = "it_skills")
public class ITSkills extends BaseEntity {

	@Column
	private String technologies;

	@Column
	private String version;

	@Column
	private String score;

	@ManyToOne
	@JoinColumn(name = "cand_id")
	@JsonIgnore
	@ToString.Exclude
	private Candidate cand;
}
