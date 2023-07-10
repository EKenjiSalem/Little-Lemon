import React from "react";
import { Link } from "react-router-dom";

function BookingForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // perform form submission logic - API request or data processing
    console.log('Form submitted:', {name, email, date, time});

    // Reset the form field
    setName('');
    setEmail('');
    setDate('');
    setTime('');
};

    return (
        <form onSubmit={handleSubmit}>
         <label>
          Name:
          {/* onChange event object used to capture info from input */}
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
         </label>
         <br />

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
         </label>
         <br />

        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
         </label>
         <br />

        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
         </label>
         <br />

        <button type="submit">Book Table</button>
       </form>
    );

export default BookingForm;



