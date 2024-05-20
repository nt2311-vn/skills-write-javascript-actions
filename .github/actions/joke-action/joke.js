const request = require("request-promise");

const options = {
	method: "GET",
	url: "https://icanhazdadjoke.com/",
	headers: {
		Accept: "application/json",
		"User-Agent": "Writing Javascript action Github Skills course",
	},
	json: true,
};

async function getJoke() {
	const res = await request(options);
	return res.joke;
}

module.exports = getJoke;
