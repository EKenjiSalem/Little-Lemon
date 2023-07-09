import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
   <>
    <BrowserRouter>
     <header>
      <Link className="logo" to="/"> Little Lemon </Link>
      <nav>
        <Link to="/about"> About</Link> 
      </nav>
     </header>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
     </Routes>
    </BrowserRouter>
   </>
  );
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
