import env from '../../env';
import { temperatureApiGet } from './host';

export const getTemperature = (params?: object): Promise<void> =>
  temperatureApiGet({
    url: `${env.TEMPERATURE_API_HOST}/api/temperature/getFromDb`,
    params
  });
