package com.app.ghost.model;

import java.time.LocalDate;

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
public class Experience extends BaseEntity {
	
	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "company_logo")
	private String companyLogo;
	
	@Column(name = "company_location")
	private String companyLocation;
	
	@Column(name = "date_from")
	private LocalDate dateFrom;
	
	@Column(name = "date_to")
	private LocalDate dateTo;
	
	@Column
	private String companyDesignation;
	
	@Column
	private double timeServed;

	@ManyToOne
	@JoinColumn(name = "cand_id")
	@JsonIgnore
	@ToString.Exclude
	private Candidate _candi;
}
