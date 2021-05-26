import Axios from 'axios';

const traktBaseUrl = 'https://api.trakt.tv/';
const traktApiKey =
  '869dd92637f9ee25d80033167a68d28f33ce045ee716d9094ba3d148826b3561';

export const TraktApi = Axios.create({
  baseURL: traktBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': traktApiKey,
  },
});
