// ESM - ES6 Modules syntax
// import * as fs from 'fs';

// CJS - Common JS Syntax
const fs = require('fs')

// index.js => source checks in current directory and copy the content of index.js to temp.js in the same directory.
fs.copyFileSync('index.js','temp.js');

// index1.js from source/current directory. Error: ENOENT: no such file or directory, copyfile 'index1.js' -> 'temp1.js'
// fs.copyFileSync('index1.js','temp1.js');

// overrites temp.js if this file already exists with filedemo.js content.
fs.copyFileSync('filedemo.js','temp.js');
