// Requires packages being used for this application
const inquirer = require(`inquirer`)
const fs = require(`fs`)
const util = require('util')

// Requiring the generateMarkdown page and writing the file 
const generateMarkdown = require(`./utils/generateMarkdown`)
const writeFileAsync = util.promisify(fs.writeFile)


// This function is prompting the user using the inquirer package
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a descripton of your project",
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe the installation process",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "What licences will you be using for this project",
            choices: [
                "Apache",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Are there any tests included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have a problem"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);

}

// This function starts the app
async function init() {
    // This is going to try to run the application 
    try {
        // This is prompting the user, taking the user input and generating the markdown for a ReadMe and if it runs correctly it console logs succsess
        const userInput = await promptUser();
        const generateReadMe = generateMarkdown(userInput);
        await writeFileAsync("./assets/readme.md", generateReadMe);
        console.log("Success");
        // This is catching any errors and if there is an error then it is going to log error to the console 
    } catch (err) {
        console.log(err);
    }
}
// This is calling the function 
init();