const debug = process.env.NODE_ENV === 'development';
const result = require('dotenv').config();

if (result.error) {
  throw result.error
}

const env = Object.assign(process.env, result.parsed);

export const Config = {
  timeout: 10000,
  hosts : {
    seba: debug ? 'http://localhost:6508' : 'https://seba-api.cf'
  },
  clientID: env['CLIENT_ID'],
}
