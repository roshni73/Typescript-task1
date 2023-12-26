import React, { useState } from 'react';
import './index.css';
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToKelvin,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fahrenheitToKelvin,
} from '../../Utils/utils';

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
    setCelsius(kelvinToCelsius(kelvinValue));
    setFahrenheit(kelvinToFahrenheit(kelvinValue));
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
    setKelvin(celsiusToKelvin(celsiusValue));
    setFahrenheit(celsiusToFahrenheit(celsiusValue));
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
    setCelsius(fahrenheitToCelsius(fahrenheitValue));
    setKelvin(fahrenheitToKelvin(fahrenheitValue));
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
