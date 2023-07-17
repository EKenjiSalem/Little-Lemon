import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
    return (
   <div>
    <h1 className="booked-main"> <br />
        Thank You for Your Reservation. <br />
         Your Booking Has Been Confirmed! </h1>
         <br />
         <h2 className="confirmation"> Confirmation# #123456789 </h2>
    </div>
    );
}

export default ConfirmedBooking;