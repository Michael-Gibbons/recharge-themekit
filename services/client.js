import dotenv from 'dotenv'
dotenv.config()

import axios from 'axios';

if (!process.env.RECHARGE_APP_URL) {
  throw 'Recharge App Url Required'
}

const RECHARGE_APP_URL = process.env.RECHARGE_APP_URL

let Cookie = process.env.COOKIE
const sessionToken = process.env.SESSION_TOKEN
Cookie += `;session=${sessionToken};`

const client = axios.create({
  baseURL: RECHARGE_APP_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'multipart/form-data',
    Host: RECHARGE_APP_URL.replace('https://', ''),
    Origin: RECHARGE_APP_URL,
    Referer: `${RECHARGE_APP_URL}/merchant/theme-editor`,
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:105.0) Gecko/20100101 Firefox/105.0',
    Cookie
  },
  withCredentials: true,
});

client.interceptors.response.use(function (response) {
  const responseUrl = response.request._header.split('\n')[0].split('?')[0]

  if (responseUrl.includes('/shopify/login')) {
    throw 'Invalid Credentials, please log into recharge.'
  }

  return response;

}, function (error) {

  return Promise.reject(error);
});

export default client