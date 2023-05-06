package com.app.ghost.controller;

import com.app.ghost.model.Credentials;

public interface ImpCredController {

	boolean credentialsPersisted(long cand_id, Credentials cred);

	Credentials updatedCred(Credentials update);

	Credentials fetchCredentials(long cred_id);
}
