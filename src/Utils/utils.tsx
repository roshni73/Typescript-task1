//string-manipulation
export function Capitalize(str: string): string {
  return str.toUpperCase();
}

export function Truncate(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
//Formatdate
export function formatDate(date: Date, format: string): string {
  if (!(date instanceof Date) || isNaN(date as unknown as number)) {
    return 'Invalid Date';
  }

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formatFunctions: Record<string, () => string> = {
    'MM/DD/YYYY': () => `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`,
    'YYYY-MM-DD': () => `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`,
    'DD/MM/YYYY': () => `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`,
  };

  const selectedFormat = formatFunctions[format];

  if (selectedFormat) {
    return selectedFormat();
  } else {
    return 'Invalid Format';
  }
}

  //NumberFormat
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
  
  export const roundNumber = (value: number | undefined, precision: number): number => {
    if (value === undefined || isNaN(value)) {
      return NaN;
    }
    return parseFloat(value.toFixed(precision));
  };
  
  export const convertToCurrency = (
    value: number | undefined,
    currency: string,
    precision: number
  ): string => {
    if (value === undefined || isNaN(value)) {
      return "Invalid Number";
    }
    return value.toLocaleString(undefined, {
      style: 'currency',
      currency,
      minimumFractionDigits: precision,
    });
  };
  
  //temperature-convert

  export const kelvinToCelsius = (kelvin: number): number => {
    return kelvin - 273.15;
  };
  
  export const kelvinToFahrenheit = (kelvin: number): number => {
    return kelvin * (9 / 5) - 459.67;
  };
  
  export const celsiusToKelvin = (celsius: number): number => {
    return celsius + 273.15;
  };
  
  export const celsiusToFahrenheit = (celsius: number): number => {
    return celsius * (9 / 5) + 32;
  };
  
  export const fahrenheitToCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * (5 / 9);
  };
  
  export const fahrenheitToKelvin = (fahrenheit: number): number => {
    return (fahrenheit + 459.67) * (5 / 9);
  };
  


  //task6:
import { Tea } from './types'; 

export const filterTea = (teaList: Tea[], minPrice: number, maxPrice: number): Tea[] => {
  return teaList.filter(tea => tea.price >= minPrice && tea.price <= maxPrice);
};

export const sortTea = (teaList: Tea[]): Tea[] => {
  return [...teaList].sort((a, b) => a.price - b.price);
};