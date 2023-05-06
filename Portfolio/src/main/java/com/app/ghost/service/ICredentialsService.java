package com.app.ghost.service;

import com.app.ghost.model.Credentials;

public interface ICredentialsService {
	Credentials saveCreds(Credentials credNew);

	Credentials updateCreds(Credentials updated);

	Credentials findCreds(long id);
}
