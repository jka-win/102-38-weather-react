
import { useState } from 'react';
import '../css/App.css';
import { fetchOwmOneCall, fetchOwmZip } from '../util.js';
import CurrentWeather from './CurrentWeather.js';
import ZipInput from './ZipInput.js';

export default function App() {
  const [geo, setGeo] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleZipEnter = async zip => {
    try {
      const zipRes = await fetchOwmZip({ zip });
      const oneCallRes = await fetchOwmOneCall({
        lat: zipRes.body.lat, lon: zipRes.body.lon,
        exclude: 'minutely,hourly,alerts',
      });

      setGeo(zipRes.body);
      setWeather(oneCallRes.body);
      setError(null);
    } catch (e) {
      setError(e.toString());
    }
  };

  const header = geo ? geo.name : 'Enter a ZIP!';
  const date = weather && new Date((weather.current.dt) * 1000);

  return <div id='float'>
    <header className='stack'>
      <h1>{header}</h1>
    </header>

    <main className='stack'>
      <div id='weather'>
        {date && <h2>{date.toLocaleString()}</h2>}
        {weather && <CurrentWeather units='metric' current={weather.current} daily={weather.daily[0]} />}
      </div>
    </main>

    <footer className='stack'>
      <div>
        <ZipInput onEnter={handleZipEnter} />
        {error && <p id='error'>{error}</p>}
      </div>
    </footer>
  </div>;
}
