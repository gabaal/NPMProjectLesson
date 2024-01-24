const fs = require('fs');
const path = require('path');

const jokesFile = path.join(__dirname, 'jokes.json');

function getJoke(){
    try {
        const jokesData = fs.readFileSync(jokesFile, 'utf-8');

        const jokes = JSON.parse(jokesData);

        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];

        return randomJoke;
    } catch (error){
        console.error('Error reading jokes:', error);
        return null;
    }
}

module.exports = {
    getJoke,
}