
import '../css/ZipInput.css';
import { useState } from 'react';

export default function ZipInput(props) {
  const [input, setInput] = useState('28205');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      props.onEnter(input);
    }
  };

  return <div id='zip-prompt'>
    <label>ZIP Code: </label>
    <input onChange={handleChange} onKeyUp={handleKeyUp} value={input} />
  </div>;
}
