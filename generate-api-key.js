const crypto = require('crypto');

// Generate a random API key
const apiKey = crypto.randomBytes(32).toString('hex');
console.log('\nYour API Key:');
console.log(apiKey);
console.log('\nAdd this to your .env file as:');
console.log(`API_KEY=${apiKey}\n`); 