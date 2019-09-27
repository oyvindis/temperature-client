import React from 'react';

export const MainPagePure = ({ temperature }: any): JSX.Element | null => (
  <div>
    <h1>Temperatures from API:</h1>
    <div>
      {temperature.location} - {temperature.temperature} - {temperature.time}
    </div>
  </div>
);
