// This function is generating markdown based off of the user input 
function generateMarkdown(userInput) {
  return `# ${userInput.projectTitle}
  ![badge](https://img.shields.io/badge/license-${userInput.license}-blue)

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${userInput.description}

  ## Installation
  ${userInput.installation}

  ## Usage
  ${userInput.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${userInput.license}-blue
  The license covering this application is the ${userInput.license} license.

  ## Contributors
  ${userInput.contributors}

  ## Tests
  ${userInput.tests}

  ## Questions
  ${userInput.questions}
  You can find me on GitHub at [${userInput.github}](https://github.com/${userInput.github})
  Email me if you have any questions at ${userInput.email}
`;
}

module.exports = generateMarkdown;