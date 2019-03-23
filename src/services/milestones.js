import fetch from 'node-fetch';

import credentials from '../credentials';

const findbyId = async projectId => {
  const response = await fetch(`${credentials.url}/projects/${projectId}/milestones?private_token=${credentials.token}`);
  return response.json();
};

export default {
  findbyId,
};
