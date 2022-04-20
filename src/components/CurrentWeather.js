
import Temperature from "./Temperature.js";

export default function CurrentWeather(props) {
  const { current, daily } = props;

  return <table>
    <tbody>
      <WeatherRow text='Temp'
        value={<Temperature units={props.units} value={current.temp} />} />
      <WeatherRow text='Feels like'
        value={<Temperature units={props.units} value={current.feels_like} />} />
      <WeatherRow text='High'
        value={<Temperature units={props.units} value={daily.temp.max} />} />
      <WeatherRow text='Low'
        value={<Temperature units={props.units} value={daily.temp.min} />} />
      <WeatherRow text='Humidity'
        value={<span>{current.humidity}%</span>} />
      </tbody>
  </table>;
}

function WeatherRow(props) {
  return <tr>
    <td>{props.text}:</td>
    <td>{props.value}</td>
  </tr>;
}
