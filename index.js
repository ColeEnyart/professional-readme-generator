// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    }
];

// TODO: Create a function to write README file
function writeToFile(finalReadme) {
    fs.writeFile('README.md', finalReadme, err => {
        err ? console.log("Big trouble dude") : console.log("Cool beans")
      })
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            const finalReadme = generateMarkdown(responses);
            writeToFile(finalReadme);
        })
};

// Function call to initialize app
init();
