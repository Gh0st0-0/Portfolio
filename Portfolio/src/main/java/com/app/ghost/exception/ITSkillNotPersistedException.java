package com.app.ghost.exception;

public class ITSkillNotPersistedException extends Exception {
	/*
	 * if it skill is not present in the database
	 */
	private static final long serialVersionUID = 1L;

	public ITSkillNotPersistedException(String message) {
		super(message);
	}

	public ITSkillNotPersistedException(Exception e) {
		super(e);
	}

	public ITSkillNotPersistedException(String message, Exception e) {
		super(message, e);
	}
}
