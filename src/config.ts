import axios from 'axios';

export interface Config {
  temperatureApi: {
    host: string;
  };
}

const createConfig = (env: any): Config => {
  return {
    // api modules
    temperatureApi: {
      host: env.TEMPERATURE_API || 'http://34.89.148.214'
    }
  };
};

const config = createConfig({});

export const getConfig = (): Config => config;

export const loadConfig = async (): Promise<void> => {
  const response = await axios.get('/env.json');
  const env = response.data;

  // override all env variables to ut1
  // Object.assign(env, {
  //   TEMPERATURE_API: 'http://34.89.148.214',
  // });

  // override all env variables to local docker
  // Object.assign(env, {
  //   TEMPERATURE_API:'http://localhost:3000',
  // });

  Object.assign(config, createConfig(env));
};
