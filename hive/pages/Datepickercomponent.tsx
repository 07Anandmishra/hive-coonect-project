"use client"
import React,{ useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button } from '@mui/material';

const Datepickercomponent = ({ onSearch }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleSearchClick = () => {
    onSearch(fromDate, toDate);
  };
 
  return (
    <div style={{ width: '50%', display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker 
          label="From Date and Time" 
          value={fromDate} 
          onChange={(date) => setFromDate(date?.toDate())}  // Updated this line
        />
      </LocalizationProvider>
     <span style={{margin:'15px 15px'}}>-</span>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker 
          label="To Date and Time" 
          value={toDate} 
          onChange={(date) => setToDate(date?.toDate())}  // Updated this line
        />
      </LocalizationProvider>
      <div>
        <Button variant='contained' onClick={handleSearchClick} style={{margin:'10px 20px'}}>Search</Button>
      </div>
    </div>
  )
}
export default Datepickercomponent