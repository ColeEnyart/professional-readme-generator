// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", fileName, err => {
        err ? console.log("Big trouble dude") : console.log("Cool beans")
      })
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then( data => {
            const fileName = `
            Here is the user's information:
            title: ${data.title}
            `
            writeToFile(fileName, data);
        })
};

// Function call to initialize app
init();
