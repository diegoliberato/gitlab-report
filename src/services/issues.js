import fetch from 'node-fetch';

import credentials from '../credentials';

const findAll = async (projectId, milestone, state) => {
  let allIssues = [];
  let morePagesAvailable = true;
  let currentPage = 0;

  while (morePagesAvailable) {
    currentPage++;
    const response = await fetch(`${credentials.url}/projects/${projectId}/issues?private_token=${credentials.token}&page=${currentPage}&state=${state}&milestone=${milestone}`);
    let issues = await response.json();
    const totalPages = response.headers.get("X-Total-Pages");
    issues.forEach(e => allIssues.unshift(e));
    morePagesAvailable = currentPage < totalPages;
  }

  return allIssues;
};

export default {
  findAll,
};
