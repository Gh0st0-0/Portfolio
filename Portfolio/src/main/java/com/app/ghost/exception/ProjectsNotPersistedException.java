package com.app.ghost.exception;

public class ProjectsNotPersistedException extends Exception {

	/*
	 * If the project is not present in the database
	 */
	private static final long serialVersionUID = 1L;

	public ProjectsNotPersistedException(String message) {
		super(message);
	}
	
	public ProjectsNotPersistedException(Exception e) {
		super(e);
	}
	
	public ProjectsNotPersistedException(String message, Exception e) {
		super(message, e);
	}
}
