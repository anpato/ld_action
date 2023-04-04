const core = require('@actions/core');
const github = require('@actions/github');

try {
  const targetDir = core.getInput('target_dir');
  console.log(targetDir);
  core.setOutput('flags', []);
} catch (error) {
  core.setFailed(error.message);
}
