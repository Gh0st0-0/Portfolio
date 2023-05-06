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
@Table(name = "contact_me")
public class ContactMe extends BaseEntity {
	@Column
	private String email;
	@Column
	private String subject;
	@Column
	private String query;
}
