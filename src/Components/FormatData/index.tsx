import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import { formatDate } from '../../Utils/utils';

function FormatDate() {
  const [date, setDate] = useState(new Date());
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDateFormat(event.target.value);
  };

  return (
    <div className='task2'>
      <h2>Task: Format Date</h2>
      <p>Develop a utility function that takes a JavaScript Date object and returns a formatted date string</p>
      <DatePicker selected={date} onChange={(date) => setDate(date as Date)} />
      <select value={dateFormat} onChange={handleFormatChange}>
        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
      </select>
      <p>Formatted Date: {formatDate(date, dateFormat)}</p>
    </div>
  );
}

export default FormatDate;
