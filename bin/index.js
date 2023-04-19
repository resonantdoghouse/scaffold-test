#! /usr/bin/env node
import fs from 'fs';
import { indexHtml, styleSheet } from '../templates/index.js';

console.log('scaffold starting 🏁');

const createDir = (dirPath) => {
  const test = fs.mkdirSync(process.cwd() + dirPath, { recursive: true });
  if (!test) {
    console.log('error creating folder', dirPath);
    process.exit(1);
  } else {
    console.log('directory created', dirPath);
  }
};

const createFile = (filePath, fileContent) => {
  fs.writeFileSync(filePath, fileContent);
  console.log('file created', filePath);
};

const init = () => {
  let projectFolderName = process.argv[2];
  if (!projectFolderName) {
    projectFolderName = 'project';
  }

  createDir(`/${projectFolderName}`);
  createFile(`${projectFolderName}/index.html`, indexHtml);
  createDir(`/${projectFolderName}/css`);
  createFile(`${projectFolderName}/css/style.css`, styleSheet);

  console.log('scaffold completed ✅');
};

init();

process.exit(0);
