package com.app.ghost.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@Table(name = "credentials")
public class Credentials extends BaseEntity {
	@Column(name="primary_no")
	private String primaryNo;
	
	@Column(name="secondry_no")
	private String secondryNo;
	
	@Column
	private String email;
	
	@Column
	private String linkedin;
	
	@Column(name ="hacker_rank")
	private String hackerRank;
}
