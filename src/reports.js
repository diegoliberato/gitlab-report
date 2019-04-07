import fs from 'fs';
import mustache from 'mustache';
import path from 'path';

const generate = (dataView, templatesDirectory, output) => {
  const templates = fs.readdirSync(templatesDirectory);

  templates.forEach((filename) => {
    const sourceFilePath = path.join(templatesDirectory, filename);
    const stats = fs.statSync(sourceFilePath);

    if (stats.isFile()) {
      const template = fs.readFileSync(sourceFilePath, { encoding: 'utf8' });
      const content = mustache.render(template, dataView);

      const outputFile = path.join(output, path.parse(filename).name);
      fs.writeFileSync(outputFile, content, 'utf8');
    }
  });
};

export default {
  generate,
};
