import React from "react"
import tables from "../assets/images/tables.jpg"
import { Link } from "react-router-dom"
 
function About() {
    return (
        <div className="">
           
            <p className="about-main-content"> Welcome to Little Lemon, your passport to the vibrant flavors of the Mediterranean.
             Nestled in the heart of city, our restaurant offers a captivating culinary journey inspired 
             by the sun-kissed shores and rich culinary traditions of the Mediterranean region.
              Immerse yourself in a warm and inviting atmosphere as our skilled chefs artfully prepare 
              a delightful array of dishes that showcase the freshest ingredients and authentic Mediterranean
               flavors. From savoring aromatic herbs and spices to indulging in tender grilled meats,
                tangy olives, and zesty citrus, every bite at Little Lemon transports you to the 
                sun-drenched coastal towns and bustling markets of Greece, Italy, Spain, and beyond. 
                Whether you're seeking a romantic dinner for two or a gathering with friends and family, 
                let our attentive staff take care of you as you embark on a culinary adventure that 
                celebrates the Mediterranean's timeless allure. Join us at Little Lemon and experience 
                a taste of the Mediterranean like never before.</p>
                <img src={tables} className="tables-1" />
     
        </div>
    );
}

export default About

