import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import Contact from "./pages/Contact";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import LemonLogo from "./assets/images/rsz_logo-1.png";
// import MainMenu from "./pages/MainMenu";


function App() {
  return (
   <>

    <BrowserRouter>
     <header>
     <Link className="logo" to="/"> <img src={LemonLogo} />  </Link>
      <nav>
        <Link to="/about"> About </Link> 
        <Link to="/bookingpage"> Booking </Link>
        <Link to="/contact"> Contact </Link> 
      </nav>
     </header>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/bookingpage" element={<BookingPage />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/confirmedbooking" element={<ConfirmedBooking />}/>
  
      
     </Routes>
    </BrowserRouter>

   </>
  );
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

