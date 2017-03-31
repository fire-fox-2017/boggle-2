'use strict'

const fs = require('fs');
const data = fs.readFileSync('data.js')

console.log(data.toString());
