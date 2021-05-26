import Axios from 'axios';

const traktBaseUrl = 'https://api.trakt.tv/';
const traktApiKey =
  '869dd92637f9ee25d80033167a68d28f33ce045ee716d9094ba3d148826b3561';

const farnatbaseUrl = 'http://webservice.fanart.tv/v3/movies/';
export const farnatKey = 'b7e747b87e70624c052f265374f115eb';

export const TraktApi = Axios.create({
  baseURL: traktBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': traktApiKey,
  },
});

export const FarnatApi = Axios.create({
  baseURL: farnatbaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
