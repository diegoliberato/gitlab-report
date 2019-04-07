import fetch from 'node-fetch';

import credentials from '../credentials';

const findAll = async (projectId, milestone, state) => {
  const allIssues = [];
  let morePagesAvailable = true;
  let currentPage = 0;

  while (morePagesAvailable) {
    currentPage += 1;
    const response = await fetch(`${credentials.url}/projects/${projectId}/issues?private_token=${credentials.token}&page=${currentPage}&state=${state}&milestone=${milestone}`);
    const issues = await response.json();
    const totalPages = response.headers.get('X-Total-Pages');
    issues.forEach(issue => allIssues.unshift(issue));
    morePagesAvailable = currentPage < totalPages;
  }

  return allIssues;
};

export default {
  findAll,
};
