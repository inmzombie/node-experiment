import axios from 'axios';
import { get, URLS } from './config/url';

const { TRANSLATE } = URLS;

const encodedParams = new URLSearchParams();
encodedParams.append('q', 'Hello, world!');
encodedParams.append('target', 'es');
encodedParams.append('source', 'en');

const options = {
  method: 'POST',
  url: get(TRANSLATE),
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key':
      'dbed9573c9mshcbd31318ee4c098p1bbf3cjsn280dc67a63bf',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
  },
  data: encodedParams,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data.data.translations);
  })
  .catch(function (error) {
    console.error(error);
  });
