package com.app.testis.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class Testimoney extends BaseEntity {
	@Column
	private String messgge;
	@Column
	private String name;
	@Column
	private String designation;
	@Column
	private boolean showAtTop;
}
