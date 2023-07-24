package com.app.ghost.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data // from Lombok
@MappedSuperclass // Allows the mapping info of this class to be applied to its sub-classes
@NoArgsConstructor // Lombok anotation to generate a parameterless constructor
public class BaseEntity { // This class provide the Primary-key id for all the Models
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto increment id
	private long id;
}
