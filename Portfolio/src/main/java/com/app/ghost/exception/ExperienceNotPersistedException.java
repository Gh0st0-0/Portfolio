package com.app.ghost.exception;

public class ExperienceNotPersistedException extends Exception {
	/*
	 * if the experience is not persisted in the database
	 */
	private static final long serialVersionUID = 1L;

	public ExperienceNotPersistedException(String message) {
		super(message);
	}

	public ExperienceNotPersistedException(Exception e) {
		super(e);
	}

	public ExperienceNotPersistedException(String message, Exception e) {
		super(message, e);
	}
}
