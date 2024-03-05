// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
     // Contributing
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?'
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are included in your project?'
    },
    // License
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3']
    },
    // Questions
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    // Github
    {
        type: "input",
        name: "github",
        message: "What is the URL to your Github profile?"
    },


];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const readmeContent = generateMarkdown(answers);
        fs.writeFile('README-demo.md', readmeContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
}

// Function call to initialize app
init();
