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
public class ProjectImages extends BaseEntity {
	@Column
	private String imageName;
	@Column
	private String imageURL;
	
	@ManyToOne
	@JoinColumn(name = "proj_id")
	@JsonIgnore
	@ToString.Exclude
	private Projects proj;
}
