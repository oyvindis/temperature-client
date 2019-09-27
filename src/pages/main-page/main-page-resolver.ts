import memoize from 'lodash/memoize';
import { resolve } from 'react-resolver';
import { getTemperature } from '../../api/temperature-api/temperatures';

const memoizedGetTemperature = memoize(getTemperature);

const mapProps = {
  temperature: () => memoizedGetTemperature()
};

export const mainPageResolver = resolve(mapProps);
