const path = require('path');
const childProcess = require('child_process');
const editJsonFile = require('edit-json-file');
const ncp = require('ncp').ncp;

function copyStarterFiles(dest) {
  const starterFilesPath = './starter-files';
  const src = path.join(__dirname + starterFilesPath);

  return new Promise((resolve, reject) => {
    ncp.limit = 16;

    ncp(src, dest, err => {
      if (err)
        reject(err);

      resolve();
    });
  });
}

function getDependencies() {
  const dependencies = `chalk cors dotenv express morgan ts-node winston`;
  const devDependencies = `@types/express @types/node @types/morgan @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint nodemon`;

  return { dependencies, devDependencies };
}

function downloadNodeModules(dest, dp) {
  const options = { cwd: dest };

  childProcess.execSync('npm i -s ' + dp.dependencies, options);
  childProcess.execSync('npm i -D ' + dp.devDependencies, options);
}

function updatePackageJson(dest) {
  let file = editJsonFile(dest + '/package.json', { autosave: true });
  file.set('name', path.basename(dest));
}

function generateProject(dest) {
  try {
    await copyStarterFiles(dest);
    updatePackageJson(dest);

    const dp = getDependencies();
    downloadNodeModules(dest, dp);
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = generateProject;
