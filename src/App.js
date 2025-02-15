import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import './App.css';
import { FaInstagram, FaTwitter, FaFacebook, FaPhone, FaMailBulk } from "react-icons/fa";
import Branches from "./Branches";


function App() {
    const navigate = useNavigate();
  return (
    <div className="App">
    <header>
        <h1>Jyoti Graphics</h1>
                      <p>Your Trusted Printing Partner</p>
                      <div className="social-icons">
                      <a href="https://www.instagram.com/jyoti_print" target="_blank" rel="noreferrer">
                        <FaInstagram size={24} />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter size={24} />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook size={24} />
                      </a>
                      </div>
    </header>

    <div class="container">
        <div class="company">
            <div class="flip-box-front">
            <h2>Jyoti Graphics - Main Office</h2>
            </div>
            <div class="flip-box-back" onClick={() => navigate("/branches")}>
            <p>Click to Open the branches option</p>
            </div>
    
        </div>

        <div class="company">
            <div class="flip-box-front">
            <h2>Jyoti Graphics - Branch 1</h2>
        </div>
        <div class="flip-box-back">
            <p>
                <a href="https://maps.app.goo.gl/gB2a4khpiiDSCdsE6" target="_blank" rel="noreferrer">
                    30A Canal East Road, Kolkata - 700 011
                </a>
            </p>
        </div>
        </div>

        <div class="company">
            <div class="flip-box-front">
            <h2>Jyoti Graphics - Branch 2</h2>
        </div>
        <div class="flip-box-back">
            <p>
                <a href="https://maps.app.goo.gl/NqA35seJL1R231Qw6" target="_blank" rel="noreferrer">
                    35A Surya Sen Street Kolkata -700009
                </a>
            </p>
        </div>
        </div>

        <div class="company">
            <div class="flip-box-front">
            <h2>Jyoti Graphics - Branch 3</h2>
        </div>
        <div class="flip-box-back">
            <p>
                <a href="https://maps.app.goo.gl/yXMrLj4yKeDPpZLn8" target="_blank" rel="noreferrer">
                    109/1 Beleghata main road, Kolkata -700 010
                </a>
            </p>
        </div>
    </div>
    </div>
    
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="flex justify-center space-x-4 mb-2">
        {/* <a href="https://www.instagram.com/jyoti_print" target="_blank" rel="noreferrer">
                        <FaInstagram size={24} />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter size={24} />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook size={24} />
                      </a> */}
                      <div className="foot-social-icons">
                      <a href="tel:+919123456789">
                        {/* <i className="fas fa-phone" style={{ fontSize: '24px' }}></i> */}
                        <FaPhone size={24} />
                      </a>
                      <a href="mailto:contact@jyotigraphics.com">
                        {/* <i className="fas fa-envelope" style={{ fontSize: '24px' }}></i> */}
                        <FaMailBulk size={24} />
                      </a>
                      </div>
        
                    </div>
                    <p>&copy; 2025 Jyoti Graphics. All Rights Reserved.</p>
    </footer>

</div>
  );
}

function AppWrapper() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/branches" element={<Branches />} />
        </Routes>
      </Router>
    );
  }

  export default AppWrapper;