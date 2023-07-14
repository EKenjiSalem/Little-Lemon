import React from "react";
import {useState} from "react"; 
import { Link } from "react-router-dom";


function BookingPage() {
    return(
      <div className="appointment" id="appointment">
       <h1 className="appointment-heading"> Book a Table </h1>
  
  <form className="book-form">
    <label> Your Name:</label>
    <input type="text" name="name" placeholder="Enter Your Name" class="signup" required />

    <label> Appointment Time & Date:</label>
    <input type="datetime-local" name="date" class="signup" required />

    <label> How Many Diners</label>
    <input type="text" name="name" placeholder="Enter Your Name" class="signup" required />

    <label> Your Email:</label>
    <input type="email" name="email" placeholder="Enter Your Email" class="signup" required />

    <label> Your Phone Number:</label>
    <input type="Number" name="number" placeholder="Enter Your Phone Number" class="signup" required/>

    <input type="submit" value="Make Appointment" name="submit" class="appointment-btn" required />
  </form>
 
</div>

  );
}

export default BookingPage;

