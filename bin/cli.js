const path = require('path');
const generateProject = require('../lib/node-ts-generator');

const dest = path.join(process.cwd(), process.argv[2] || 'node-ts');

console.log('Setting up the project...');

generateProject(dest)
  .then(() => {
    console.log('Project setup successful!');
  })
  .catch(err => {
    console.err('error while setting up project: ' + err);
  });
