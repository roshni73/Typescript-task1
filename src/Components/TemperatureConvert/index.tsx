import React, { useState } from 'react';
import './index.css';

const TemperatureConverter: React.FC = () => {
  const [kelvin, setKelvin] = useState<number | ''>('');
  const [celsius, setCelsius] = useState<number | ''>('');
  const [fahrenheit, setFahrenheit] = useState<number | ''>('');

  const handleKelvinChange = (value: string) => {
    if (value === '') {
      setKelvin('');
      setCelsius('');
      setFahrenheit('');
      return;
    }

    const kelvinValue = parseFloat(value);
    setKelvin(kelvinValue);
    setCelsius(kelvinValue - 273.15);
    setFahrenheit((kelvinValue - 273.15) * (9 / 5) + 32);
  };

  const handleCelsiusChange = (value: string) => {
    if (value === '') {
      setKelvin('');
      setCelsius('');
      setFahrenheit('');
      return;
    }

    const celsiusValue = parseFloat(value);
    setCelsius(celsiusValue);
    setKelvin(celsiusValue + 273.15);
    setFahrenheit(celsiusValue * (9 / 5) + 32);
  };

  const handleFahrenheitChange = (value: string) => {
    if (value === '') {
      setKelvin('');
      setCelsius('');
      setFahrenheit('');
      return;
    }

    const fahrenheitValue = parseFloat(value);
    setFahrenheit(fahrenheitValue);
    setCelsius((fahrenheitValue - 32) * (5 / 9));
    setKelvin((fahrenheitValue - 32) * (5 / 9) + 273.15);
  };
return (
    <>
     <div className="converter">
        <h2>Task: Convert Temperature</h2>
    <div>
      <label>Kelvin:</label>
      <input
        type="number"
        value={kelvin}
        onChange={(e) => handleKelvinChange(e.target.value)}
      />
    </div>
    <div>
      <label>Celsius:</label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => handleCelsiusChange(e.target.value)}
      />
    </div>
    <div>
      <label>Fahrenheit:</label>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => handleFahrenheitChange(e.target.value)}
      />
    </div>
  </div>
    </>
);
 

};

export default TemperatureConverter;
