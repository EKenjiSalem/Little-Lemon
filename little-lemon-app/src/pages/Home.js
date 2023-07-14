import React from "react"
import { Link } from "react-router-dom"
import waiterImg from "../assets/images/waiter.jpeg"
import mainDish from "../assets/images/fish.png";
import mainSalad from "../assets/images/salad.png";
import mainBrushetta from "../assets/images/brushetta.png";
//  import logo from "../assets/images/logo";
// import MainMenu from "./pages/MainMenu.js";

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title "> Little Lemon </h1>
             <h2 className="home-title-1"> Chicago </h2>
             <p className="mission"> We are a family owned business who prides themselves on the best quality <br />  ingredients along witha authentic meal. We offer reservations, with a large <br />  dining hall with a variety of seating for all types of groups or singles. </p>
            <Link to="/bookingpage">Book your meal</Link>
            <div>
            <img src={waiterImg} className="waiter-img" />
            </div>

            <div className="articles" id="articles">
             <div className="container">

             <h1 className="heading"> Main Dishes </h1>

             <div class="articles-container">
              <div className="article-info" data-aos="fade-in">
                <img src={mainDish} className="" alt="" />
               <div className="article-content">
               <span> Grilled Catfish </span>
               <p>  The signature dish at little lemon. Our freshly grilled fish topped with 
               salt, pepper, with a lemon zest sauce. </p>
               <p> $12.99 </p>
              <Link to=""  className="button"> Learn More </Link>
              </div>
            </div>

          <div className="article-info" data-aos="fade-in">
           <img src={mainSalad} className="button" alt="" />
           <div className="article-content">
             <span> Salad </span>
             <p> The famous greek salad of crispy lettuce, peppers, olives, and our house made dressing</p>
             <p> $9.99 </p>
             <Link to="" className="button "> Learn More </Link> 
            </div>
           </div>

           <div className="article-info" data-aos="fade-in">
            <img src={mainBrushetta} alt="button" />
            <div className="article-content">
             <span> Brushetta </span>
             <p> Our Brushetta is made from grilled bread that has been smeared with garlic and tomatoes. </p>
             <p> $8.99 </p>
            <Link to="" className="button"> Learn More </Link> 
          </div>
        </div>
      </div>
     </div> 
    </div>
  </div>
  )
};

export default Home;