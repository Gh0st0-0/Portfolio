package com.app.ghost.exception;

public class OtherSkillNotPersistedException extends Exception {
	/*
	 * if the other skill is not present in the database
	 */
	private static final long serialVersionUID = 1L;

	public OtherSkillNotPersistedException(String message) {
		super(message);
	}

	public OtherSkillNotPersistedException(Exception e) {
		super(e);
	}

	public OtherSkillNotPersistedException(String message, Exception e) {
		super(message, e);
	}
}
