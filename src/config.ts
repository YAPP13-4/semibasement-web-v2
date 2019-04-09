const debug = process.env.NODE_ENV === 'development';

export namespace Config {
  export const timeout = 10000;

  export const hosts = {
    seba: debug ? 'http://localhost:6508' : 'https://seba-api.cf',
  };
}
