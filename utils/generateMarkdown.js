// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  return `<string with all markdown code for the chosen badge>`
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
