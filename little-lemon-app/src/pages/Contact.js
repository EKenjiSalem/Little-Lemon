import React from "react"
import { Link } from "react-router-dom"

function Contact() {
    return (
        <div >
            <h1 className="contact-heading"> Contact US </h1>
            <p className="contact-info"> We are located in the downtown Chicago. </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380514.4935786071!2d-88.06160609332794!3d41.833261704883185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1689441548668!5m2!1sen!2sus"
             width="600" 
             height="450" 
             style={{ border: "0" }} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
};

export default Contact;