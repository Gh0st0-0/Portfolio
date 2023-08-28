package com.app.ghost.exception;

public class AcadmicsNotPersistedException extends Exception {
	private static final long serialVersionUID = 1L;

	public AcadmicsNotPersistedException(String message) {
		super(message);
	}

	public AcadmicsNotPersistedException(Exception e) {
		super(e);
	}

	public AcadmicsNotPersistedException(String message, Exception e) {
		super(message, e);
	}
}
