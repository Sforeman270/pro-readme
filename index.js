/* GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
 */
fs = require('fs');

const licenses = [

    {
        name: "MIT",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        text: ' Begin license text.'
        /* Copyright 2020 Shadrea Foreman
        
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
         files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
          modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
           Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
        LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        
        End license text.'  */
        
        
        
    }
];
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: "Title:",
    },
    {
        type: 'input',
        name: 'Description',
        message: "Please describe your product",
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: "What does your product consist of?",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "Installation:",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "Usage:",
    },
    {
        type: 'list',
        name: 'License',
        message: "License:",
        choices: ["MIT","CC"]
    },
    {
        type: 'input',
        name: 'Contributing',
        message: "Contributing:",
    },
    {
        type: 'input',
        name: 'Tests',
        message: "Tests:",
    },
    {
        type: 'input',
        name: 'github',
        message: "github username",
    },
    {
        type: 'input',
        name: 'email',
        message: "email:",
    },
    
     
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
        console.log('yayyy!');
      });
}

// function to initialize program
function init() {
    var inquirer = require('inquirer');
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile(
                "README.md",
                `
                # ${answers["Title"]}

                ## Description 
                
                
                
                ## Table of Contents (Optional)
                
                If your README is very long, add a table of contents to make it easy for users to find what they need.
                
                * [Installation](#installation)
                * [Usage](#usage)
                * [Credits](#credits)
                * [License](#license)
                
                
                ## Installation
                
                What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
                
                
                ## Usage 
                
                Provide instructions and examples for use. Include screenshots as needed. 
                
                
                ## Credits
                
                List your collaborators, if any, with links to their GitHub profiles.
                
                If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
                
                If you followed tutorials, include links to those here as well.
                
                
                
                ## License
                
                The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
                
                
                ---
                
                🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
                
                ## Badges
                
                ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
                
                Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
                
                
                ## Contributing
                
                If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.
                
                ## Tests
                
                Go the extra mile and write tests for your application. Then provide examples on how to run them.
                
                `
                );
        })
        .catch(error => {
            // if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            // } else {
            // Something else when wrong
            // }
            console.error(error);
        });
       
}

// function call to initialize program
init();
