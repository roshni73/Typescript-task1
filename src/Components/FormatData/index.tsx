import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

function formatDate(date, format) {
    if (!(date instanceof Date) || isNaN(date)) {
        return 'Invalid Date';
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatFunctions = {
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

function FormatDate() {
    const [date, setDate] = useState(new Date());
    const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');

    const handleFormatChange = (event) => {
        setDateFormat(event.target.value);
    };

    return (
        <div className='task2'>
            <h2>Task: Format Date</h2>
            <p>Develop a utility function that takes a JavaScript Date object and
                returns a formatted date string</p>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
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