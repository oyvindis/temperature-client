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
  const env: object = {};
  Object.assign(config, createConfig(env));
};
