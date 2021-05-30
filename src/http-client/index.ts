import Axios from 'axios';
import {traktApiKey} from '../constants/api-access';

const traktBaseUrl = 'https://api.trakt.tv/';
const fanArtBaseUrl = 'http://webservice.fanart.tv/v3/movies/';

export const TraktApi = Axios.create({
  baseURL: traktBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': traktApiKey,
  },
});

export const FarnatApi = Axios.create({
  baseURL: fanArtBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
