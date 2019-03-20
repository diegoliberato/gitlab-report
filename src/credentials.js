import dotenv from 'dotenv';

dotenv.config();

export default {
  url: process.env.URL,
  token: process.env.TOKEN,
};
