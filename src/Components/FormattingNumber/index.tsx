import React, { useState } from "react";

interface NumberFormatProps {
  value: number;
  userSeparator: string;
}

export const formatNumberWithOptions = (
  value: number | undefined,
  separator: string,
  precision: number,
  format: string,
  currency: string
): string => {
  if (value === undefined || isNaN(value)) {
    return "Invalid Number";
  }
  const formattedValue = value.toLocaleString(undefined, {
    style: format,
    currency,
    minimumFractionDigits: precision,
    useGrouping: true,
  });
  return formattedValue.replace(/,/g, separator);
};

const FormattingNumber: React.FC<NumberFormatProps> = ({ userSeparator = "," }) => {
  const [inputValue, setInputValue] = useState("");
  const [precision, setPrecision] = useState(2);
  const [format, setFormat] = useState("decimal");
  const [currency, setCurrency] = useState("USD");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlePrecisionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const precisionValue = parseInt(event.target.value);
    setPrecision(isNaN(precisionValue) ? 0 : precisionValue);
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormat(event.target.value);
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value);
  };

  const formattedNumber = formatNumberWithOptions(
    parseInt(inputValue) || undefined,
    userSeparator,
    precision,
    format,
    currency
  );

  return (
    <>
      <div className="question">
       <h2>Task: Number Formatting Functions</h2>
       <p> Develop a utility function to format a number with commas
            as a specific separator</p>
        <p> Implement a function to round a number to a specified
            number of decimal places.</p>
        <p> Create a function to convert a numeric amount to a currency format
             Requirements:</p>
        <li>here should be input for format.</li>
         <li> There should be input for specified precision</li>
        <li>There should be input for selection of currency.</li>
        <li> Precision should affect in all three task</li>
      </div>
      <main>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter number"
          />
          <input
            type="number"
            value={precision}
            onChange={handlePrecisionChange}
            placeholder="Precision"
          />
          <select value={format} onChange={handleFormatChange}>
            <option value="decimal">Decimal</option>
            <option value="percent">Percent</option>
            <option value="currency">Currency</option>
          </select>
          <select value={currency} onChange={handleCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <p>Formatted Number: {formattedNumber}</p>
        </div>
      </main>
    </>
  );
};

export default FormattingNumber;