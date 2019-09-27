import { getConfig } from '../../config';
import { temperatureApiGet } from './host';

export const getTemperature = (params?: object): Promise<void> =>
  temperatureApiGet({
    url: `${getConfig().temperatureApi.host}/api/temperature/getFromDb`,
    params
  });
