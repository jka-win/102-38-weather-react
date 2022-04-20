
import { useState } from 'react';
import '../css/App.css';
import { fetchOwmOneCall, fetchOwmZip } from '../util.js';
import CurrentWeather from './CurrentWeather.js';
import ZipInput from './ZipInput.js';

export default function App() {
  const [geo, setGeo] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleZipEnter = async zip => {
    const zipRes = await fetchOwmZip({ zip });
    const oneCallRes = await fetchOwmOneCall({
      lat: zipRes.lat, lon: zipRes.lon,
      exclude: 'minutely,hourly,alerts',
    });
    setGeo(zipRes);
    setWeather(oneCallRes);
  };

  const header = geo ? geo.name : 'Enter a ZIP!';
  const date = weather && new Date(weather.current.dt * 1000);

  return <div id='app'>
    <h1>{header}</h1>
    {date && <h2>{date.toLocaleString()}</h2>}
    {weather && <CurrentWeather units='metric' current={weather.current} daily={weather.daily[0]} />}
    <ZipInput onEnter={handleZipEnter} />
  </div>;
}
