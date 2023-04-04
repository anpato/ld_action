const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require('path');
try {
  const targetDir = core.getInput('target_dir');
  const files = fs.readdirSync(path.join(__dirname, targetDir));
  core.setOutput('flags', files);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(payload);
} catch (error) {
  core.setFailed(error.message);
}
