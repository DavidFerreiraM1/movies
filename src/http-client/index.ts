import Axios from 'axios';
import {traktApiKey} from '../constants/api-access';

const traktBaseUrl = 'https://api.trakt.tv/';

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
