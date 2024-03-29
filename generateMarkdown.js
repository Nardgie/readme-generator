// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GPL 3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "BSD 3") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return "";
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0") {
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL 3.0") {
    return `[GPL 3.0](https://opensource.org/licenses/GPL-3.0)`;
  } else if (license === "BSD 3") {
    return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the MIT license.`;
  } else if (license === "Apache 2.0") {
    return `This project is licensed under the Apache 2.0 license.`;
  } else if (license === "GPL 3.0") {
    return `This project is licensed under the GPL 3.0 license.`;
  } else if (license === "BSD 3") {
    return `This project is licensed under the BSD 3 license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description} 

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage) 
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Questions

  If you have any questions, please feel free to reach out to me at ${
    data.email
  }. You can also check out my GitHub profile here: (${data.github}).

  ## Credits

  ${data.credits}

  ## Tests

  ${data.tests}

  ## How to Contribute
  
  ${data.contribution}

`;
}

module.exports = generateMarkdown;
