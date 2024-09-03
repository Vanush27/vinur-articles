import axios from 'axios';

const guardianapisApiUrl = 'https://content.guardianapis.com/';

export const baseUrl = axios.create({
  baseURL: guardianapisApiUrl,
});
