#!/usr/bin/env node
const url = process.argv[2];
const exec = require('child_process').exec;
const fs = require('fs');

if (!url) {
  console.log("url can not be empty");
};

exec(`npx tsc ${url}`, function (err, stdout) {
  if (err) throw err;
  const jsFile = url.slice(0, -2) + "js";
  exec(`node ${jsFile}`, function (err, stdout) {
    if (err) throw err;
    fs.unlinkSync(jsFile);
    console.log(stdout);
  })
});
