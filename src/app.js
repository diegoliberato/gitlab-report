import fs from 'fs';
import mustache from 'mustache';
import readline from 'readline-sync';

import services from './services';

const askAndReturnMilestone = () => {
  return readline.question('Type a milestone: ');
};

const askAndReturnOutputPath = () => {
  return readline.question('Type a output directory: ');
};

const askAndReturnProjectId = () => {
  return readline.question('Type a project id: ');
};

const askAndReturnState = () => {
  const status = ['opened', 'closed'];
  return status[readline.keyInSelect(status, 'Type a status: ')];
};

const generateWhatsNewsFile = (data, output) => {
  const sourcePath = './templates';
  const file = 'what\'s-news.md.mst';
  const template = fs.readFileSync(`${sourcePath}/${file}`, { encoding: 'utf8' });
  const content = mustache.render(template, data);

  const writePath = `${output}/${file.replace('.mst', '')}`;
  fs.writeFileSync(writePath, content, 'utf8');
};

const execute = async () => {
  const idProject = askAndReturnProjectId();
  const milestone = askAndReturnMilestone();
  const state = askAndReturnState();
  const output = askAndReturnOutputPath();

  const issues = await services.issues.findAll(idProject, milestone, state);

  const data = {
    issues,
    milestone,
  };

  generateWhatsNewsFile(data, output);
};

execute();
