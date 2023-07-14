import React from "react"
import mainDish from "../assets/images/fish.png"
import { Link } from "react-router-dom"

function MainMenu() {

 return(
    <div className="articles" id="articles">
    <div className="container">
  <h1 className="heading"> Article Post </h1>
  <div class="articles-container">
    <div className="article-info" data-aos="fade-in">
      <img src={mainDish} className="" alt="" />
      <div className="article-content">
        <span> April 25th, 2022 </span>
        <Link to=""> Post Title Goes Here </Link>
        <p> This is the best clinic in the bay.</p>
        <Link to=""  className="button"> Learn More </Link>
      </div>
    </div>

    <div className="article-info" data-aos="fade-in">
      <img src={mainSalad} className="" alt="" />
      <div className="article-content">
        <span> April 25th, 2022 </span>
        <Link to="" className=""> Post Title Goes Here </Link> 
        <p> This is the best clinic in the bay.</p>
        <Link to="" className=""> Post Title Goes Here </Link> 
      </div>
    </div>

    <div className="article-info" data-aos="fade-in">
      <img src={mainBrushetta} alt="" />
      <div className="article-content">
        <span> April 25th, 2022 </span>
        <Link to="" className=""> Post Title Goes Here </Link> 
        <p> This is the best clinic in the bay.</p>
        <Link to="" className=""> Post Title Goes Here </Link> 
      </div>
    </div>
  </div>
</div> 
</div>
    )
};

export default MainMenu;