const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    readline.question('What\'s your name? ', name => {
        readline.question('What\'s your year of birth? ', yob => {
            let age = new Date().getFullYear() - yob;
            readline.question('What\'s your hometown? ',hometown => {
                console.log(`Thank you. Hello ${name}, so you are ${age} years old and from ${hometown}`)
                readline.close();
            });
        }); 
    });