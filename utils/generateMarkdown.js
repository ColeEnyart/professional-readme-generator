// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `This project is licensed under the [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) License.`
      break;
    case 'Apache':
      return `This project is licensed under the [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) License.`
      break;
    case 'Unlicense':
      return `This project is licensed under the [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) License.`
      break;
    default:
      return 'This project has no license'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


  return `<string with a link to the appropriate license>`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


  // returns a final string with all licensing markdown
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contribute
  ${data.contribute}
  
  ## Tests
  ${data.test}

  ## Questions
  [GitHub Profile](https://github.com/${data.username})
  
  If you have additional questions then you can reach me by email at: ${data.email}
`;
}

module.exports = generateMarkdown;
