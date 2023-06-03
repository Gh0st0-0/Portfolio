package com.app.ghost.exception;

public class CredentialNotPersistedException extends Exception {

	/*
	 * when credentials are not present in the database
	 */
	private static final long serialVersionUID = 1L;

	public CredentialNotPersistedException(String message) {
		super(message);
	}

	public CredentialNotPersistedException(Exception e) {
		super(e);
	}

	public CredentialNotPersistedException(String message, Exception e) {
		super(message, e);
	}
}
