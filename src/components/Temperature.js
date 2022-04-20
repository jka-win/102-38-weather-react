
import { kelvinToCelcius, kelvinToFahrenheit } from "../util.js";

const tempUnits = {
  metric: { unit: 'C', convert: kelvinToCelcius },
  imperial: { unit: 'F', convert: kelvinToFahrenheit },
};

export default function Temperature(props) {
  const tempUnit = tempUnits[props.units];
  if (!tempUnit) {
    throw new Error(`Unknown units: ${props.units}`);
  }

  const temp = tempUnit.convert(props.value);
  const unit = tempUnit.unit;
  
  return <span>
    {temp.toFixed(2)}&deg;{unit}
  </span>;
}
