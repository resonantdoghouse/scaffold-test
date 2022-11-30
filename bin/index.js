#! /usr/bin/env node
import fs from 'fs';
import { indexHtml } from '../templates/index.js';

console.log('scaffold starting');

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
  createDir('/test');
  createFile('test/index.html', indexHtml);
};

init();

process.exit(0);
