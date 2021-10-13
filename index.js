// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the Project Title:            ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter the Description:              ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the Installation Instruction: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the Usage Information:        ',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a License:                   ',
        name: 'license',
        choices: ['MIT', 'Apache', 'Unlicense', 'None']
    }, 
    {
        type: 'input',
        message: 'Enter the Contribution Guidelines:  ',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Enter the Test Instructions:        ',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your GitHub Username:         ',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your Email Address:           ',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(finalReadme) {
    fs.writeFile('README.md', finalReadme, err => {
        err ? console.log("error") : console.log("Success!!!")
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
