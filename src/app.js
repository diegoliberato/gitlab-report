import readline from 'readline-sync';

import reports from './reports';
import services from './services';

const askAndReturnMilestone = () => readline.question('Type a milestone: ');
const askAndReturnOutputPath = () => readline.question('Type a output directory: ');
const askAndReturnProjectId = () => readline.question('Type a project id: ');
const askAndReturnState = () => {
  const status = ['opened', 'closed'];
  return status[readline.keyInSelect(status, 'Type a status: ')];
};

const init = async () => {
  const projectId = askAndReturnProjectId();
  const milestone = askAndReturnMilestone();
  const state = askAndReturnState();
  const output = askAndReturnOutputPath();
  const templatesDir = './templates';

  const dataView = {
    issues: await services.issues.findAll(projectId, milestone, state),
    milestone,
  };

  reports.generate(dataView, templatesDir, output);
};

init();
