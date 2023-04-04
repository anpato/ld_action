const core = require('@actions/core');
const github = require('@actions/github');

try {
  const targetDir = core.getInput('target_dir');
  console.log(targetDir);
  core.setOutput('flags', []);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(payload);
} catch (error) {
  core.setFailed(error.message);
}
