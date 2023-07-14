import React from "react";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [availableTimes] = useState(['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM']);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBookingTimeChange = (event) => {
    setBookingTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="bookingTime">Booking Time:</label>
        <select id="bookingTime" value={bookingTime} onChange={handleBookingTimeChange}>
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Booking;