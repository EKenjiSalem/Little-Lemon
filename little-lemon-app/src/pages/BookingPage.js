import React from "react";
import {useState} from "react"; 
import { Link } from "react-router-dom";
import ConfirmedBooking from "../pages/ConfirmedBooking";



function BookingPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [guests, setGuests] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setDate("");
    setNumber("");
    setDate("");
    setGuests("");
    // setIsSubmitted(true);
    console.log("Form Submitted!")
  }

    return (
      <div className="booking" id="booking">
       <h1 className="booking-heading"> Book a Table </h1>
  
  <form className="book-form" onSubmit={handleSubmit} data-test-id="submit-form-info">
    <label htmlFor="name"> Your Name:</label>
    <input 
     id="name" 
     type="text" 
     name="name" 
     value={name}
     placeholder="Enter Your Name"
     className="signup" 
     onChange={(e)=> setName(e.target.value)}
     required />

    <label> Your Phone Number:</label>
    <input type="Number" name="number"
     value={number} 
     placeholder="Enter Your Phone Number"
     className="signup" 
     onChange={(e)=> setNumber(e.target.value)}
      required/>

    <label> Appointment Date & Time:</label>
    <input type="datetime-local" name="date" 
    value={date} className="signup"
    onChange={(e)=> setDate(e.target.value)}
     required />

    <label> How Many Guests:</label>
    <input type="text" name="name" 
    value={guests} 
    placeholder="How many People"
    className="signup" 
    onChange={(e)=> setGuests(e.target.value)}
    required />

    <label> Your Email:</label>
    <input type="email" name="email"
     value={email} 
     placeholder="Enter Your Email"
     className="signup"
     onChange={(e)=> setEmail(e.target.value)}
     required />
  <Link to="/confirmedbooking">
   <input type="submit" value="Submit" name="submit" className="booking-button" aria-label="on Click" required />
  </Link>
  </form>
   {/* {isSubmitted && <ConfirmedBooking />} */}
 
</div>

  );
}

export default BookingPage;

