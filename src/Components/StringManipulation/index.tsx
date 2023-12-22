import React, { useState } from 'react';
import './index.css';

export function Capitalize(str: string): string {
  return str.toUpperCase();
}

export function Truncate(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

function StringManipulation() {
  const [originalString, setOriginalString] = useState<string>('');
  const [truncateLength, setTruncateLength] = useState<number>(5);
  const capitalizedString: string = Capitalize(originalString);
  const truncatedString: string = Truncate(originalString, truncateLength);

  return (
    <>
      <div className="task3">
        <h2>Task: String Manipulation</h2>
        <p>Task 5.1: Create a utility function that takes a string as input and
          returns a new string with the letter capitalized. Apply this utility
          in a React component.</p>
        <p>Task 5.2: Create a utility function to truncate a given string to a
            specified length.
        </p>
      </div>
      <div className='task3-content'>
        <main>
          <label htmlFor="inputString">Enter a string:</label>
          <input
            type="text"
            id="inputString"
            value={originalString}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOriginalString(e.target.value)}
          />
          <label htmlFor="truncateLength">Truncate Length:</label>
          <input
            type="number"
            id="truncateLength"
            value={truncateLength}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTruncateLength(Number(e.target.value))}
          />
          <p>Original string: {originalString}</p>
          <p>Capitalized string: {capitalizedString}</p>
          <p>Truncated string: {truncatedString}</p>
        </main>
      </div>
    </>
  );
}  
export default StringManipulation;
