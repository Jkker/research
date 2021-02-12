import React from 'react';

const https = require('https');
https
	.get(
		'https://ipgeolocation.abstractapi.com/v1/?api_key=0b43e148aa7946d9a8e10f504306a8d7',
		(resp) => {
			let data = '';

			// A chunk of data has been received.
			resp.on('data', (chunk) => {
				data += chunk;
			});

			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				console.log(JSON.parse(data.country));
        
			});
		}
	)
	.on('error', (err) => {
		console.log('Error: ' + err.message);
	});