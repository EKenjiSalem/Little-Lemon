
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Nav from './Nav';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <>
      <h1> Little Lemon </h1>
      <Nav />
      <Routes>
        <Route path="/Header" element={<Header />}> </Route>
        <Route path="/Main" element={<Main />}> </Route>
        <Route path="/Nav" element={<Nav />}> </Route>
        <Route path="/Footer" element={<Footer />}> </Route>
      </Routes>
    </>
  );
}

export default App;



