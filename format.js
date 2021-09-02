#!/usr/bin/env node

const fs = require("fs");

let qbJson = JSON.parse(fs.readFileSync('./raw/qb.json', 'utf8'));

for(let i = 0; i < qbJson.length; i++) {
    console.log(qbJson[i].name);
}