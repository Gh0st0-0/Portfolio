package com.app.ghost.exception;

public class ProjectImageNotPersistedException extends Exception {

	/*
	 * if the image is not present in the satabase
	 */
	private static final long serialVersionUID = 1L;

	public ProjectImageNotPersistedException(String message) {
		super(message);
	}

	public ProjectImageNotPersistedException(Exception e) {
		super(e);
	}

	public ProjectImageNotPersistedException(String message, Exception e) {
		super(message, e);
	}
}
