package com.app.ghost.exception;

public class CandidateNotPersistedException extends Exception {
	/*
	 * when candidate is not found in the database
	 */
	private static final long serialVersionUID = 1L;

	public CandidateNotPersistedException(String message) {
		super(message);
	}

	public CandidateNotPersistedException(Exception e) {
		super(e);
	}

	public CandidateNotPersistedException(String message, Exception e) {
		super(message, e);
	}

}
