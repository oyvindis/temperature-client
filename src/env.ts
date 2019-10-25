import get from 'lodash/get';

import { Configuration } from './types';

interface EnvironmentVariables {
  TEMPERATURE_API_HOST: string;
}

const env = {
  TEMPERATURE_API_HOST:
    get(window, ['env', 'TEMPERATURE_API_HOST']) || 'http://134.89.148.214'
} as EnvironmentVariables;

export default { ...env } as Configuration;
