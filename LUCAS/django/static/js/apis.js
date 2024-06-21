//instruções das api´s utilizadas no projeto

// curl -X POST \
//      -H "Content-Type: application/json" \
//      -d '{"email": "seu_email@example.com", "password": "sua_senha"}' \
//      http://localhost/api/login/
//
// retorno se positivo - Object { token: "1c3432fc61d9769eea1e7512aac72a65185e2caf" }

export async function apiLogin(email, password) {
    const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    return await response;
}

// curl -X POST \
//      -H "Content-Type: application/json" \
//      -H "Authorization: Token SEU_TOKEN" \
//      http://localhost/api/logout/
//

export async function apiLogout(token) {
	const response = await fetch('/api/logout/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Token ${token}`
		}
	});
	return await response;
}


// curl -X POST http://localhost/api/signup/ \
// -H "Content-Type: application/json" \
// -d '{
//   "username": "seu_username",
//   "email": "seu_email",
//   "password": "sua_senha"
// }'

export async function apiSignup(username, email, password) {
	const response = await fetch('/api/signup/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, email, password })
	});
	return await response;
}


