const debug = process.env.NODE_ENV === 'development';

export const Config = {
  timeout: 10000,
  hosts : {
    seba: debug ? 'http://localhost:6508' : 'https://seba-api.cf'
  },
}
