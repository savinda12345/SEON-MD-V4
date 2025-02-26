const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SEON-MD=RYA0nTzZ#KkK-M4xzTVZRVhmugFxng0rOStCVsoTtWawKmVZh8BA', //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || 'savinda12345', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || 'vU62L4AQFamwKm9UDN8oJ4rAlyME7D1a6go8', //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || 'SEON-MD-DATABASE' //Bot Database Repo Name
};
