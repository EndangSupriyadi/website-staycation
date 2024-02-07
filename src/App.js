import React from "react"; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'assets/scss/style.scss';
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
 return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />      
          <Route path="/properties/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />    
          <Route path="/example" element={<Example />} />    
        </Routes>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
 );
}

export default App;