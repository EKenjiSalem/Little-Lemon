import React, { useState, useReducer } from 'react';

function availableTimesReducer(state, action) {
  // You can add logic here to update the available times based on the selected date
  // For now, the reducer returns the same available times regardless of the date
  return ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
}

function Main() {
  const [availableTimes, updateTimes] = useReducer(availableTimesReducer, [], initializeTimes);

  function initializeTimes() {
    return ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
  }

  return (
    <div>
      <h1>Main Component</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
    updateTimes(); // Dispatch the state change to update the available times
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </div>
      <div>
        <label htmlFor="bookingTime">Booking Time:</label>
        <select id="bookingTime">
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Main;