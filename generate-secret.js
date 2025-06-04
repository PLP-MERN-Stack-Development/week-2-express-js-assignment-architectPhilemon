const crypto = require('crypto');

// Generate a random JWT secret
const jwtSecret = crypto.randomBytes(64).toString('hex');
console.log('\nYour JWT Secret:');
console.log(jwtSecret);
console.log('\nAdd this to your .env file as:');
console.log(`JWT_SECRET=${jwtSecret}\n`); 