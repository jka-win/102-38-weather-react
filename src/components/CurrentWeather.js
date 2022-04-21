
import '../css/CurrentWeather.css'
import Temperature from "./Temperature.js";

export default function CurrentWeather(props) {
  const { current, daily } = props;

  return <div id='conditions'>
    <p id='temp-current'>
      <Temperature units={props.units} value={current.temp} />
    </p>
    <p id='temp-high'>
      <Temperature units={props.units} value={daily.temp.max} />
    </p>
    <p id='temp-low'>
      <Temperature units={props.units} value={daily.temp.min} />
    </p>
    <p id='temp-feelslike'>Feels like:&nbsp;
      <Temperature units={props.units} value={current.feels_like} />
    </p>
    <p id='humidity'>Humidity:&nbsp;
      {current.humidity}%
    </p>
  </div>;
}
