const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.get('/api', (req, res) => {
	axios
		//.get('https://type.fit/api/quotes')
		.get('https://api.adviceslip.com/advice')
		// Show response data
		.then((result) => {
			console.log(result.data);
			res.send(result.data);
		})
		.catch((err) => console.log(err));
	console.log('from back');
});
app.listen(5000, () => {
	console.log('server running');
});
