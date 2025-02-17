import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css"; // Keep styling if needed
import { FaInstagram, FaTwitter, FaFacebook, FaPhone, FaMailBulk } from "react-icons/fa";
// import React, { useState } from "react";

function Branches() {
  const navigate = useNavigate();

  return (
    <div className="branches-page">
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
                  <h2>UNIT 1</h2>
                  </div>
                  <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/W3RGh6AWDiBAAAWp7" target="_blank" rel="noreferrer">
                        35A SURYA SEN STREET, KOLKATA- 700 009
                      </a>
                  </p>
              </div>
          
              </div>
      
              <div class="company">
                  <div class="flip-box-front">
                  <h2>UNIT 2</h2>
              </div>
              <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/ZpNVH2muyBSiHUEbA" target="_blank" rel="noreferrer">
                        30A CANAL EAST ROAD, KOLKATA- 700 011
                      </a>
                  </p>
              </div>
              </div>
      
              <div class="company">
                  <div class="flip-box-front">
                  <h2>UNIT 3</h2>
              </div>
              <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/GS4NAdD7seTSnH288" target="_blank" rel="noreferrer">
                      9/2 CHINTAMONI DAS LANE, KOLKATA- 700 009
                      </a>
                  </p>
              </div>
              </div>
      
              <div class="company">
                  <div class="flip-box-front">
                  <h2>UNIT 4</h2>
              </div>
              <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/rCiTtHet7P2heeP78" target="_blank" rel="noreferrer">
                      109/1 DR. SURESH MUKHERJEE ROAD, KOLKATA-700 010
                      </a>
                  </p>
              </div>
          </div>

          <div class="company">
                  <div class="flip-box-front">
                  <h2>UNIT 5</h2>
              </div>
              <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/1a2mXuZzhDpTAVAQ7" target="_blank" rel="noreferrer">
                      63/2D SURYA SEN STREET, KOLKATA- 700 009
                      </a>
                  </p>
              </div>
          </div>
          {/* <div class="company">
                  <div class="flip-box-front">
                  <h2>JYOTI ENTERPRISE</h2>
              </div>
              <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/ZpNVH2muyBSiHUEbA" target="_blank" rel="noreferrer">
                      30A CANAL EAST ROAD, KOLKATA- 700 011
                      </a>
                  </p>
              </div>
          </div>
          <div class="company">
                  <div class="flip-box-front">
                  <h2>SIGN INK</h2>
              </div>
              <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/ZpNVH2muyBSiHUEbA" target="_blank" rel="noreferrer">
                      30A CANAL EAST ROAD, KOLKATA- 700 011
                      </a>
                  </p>
              </div>
          </div>
          <div class="company">
                  <div class="flip-box-front">
                  <h2>AMAN PRINTERS</h2>
              </div>
              <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/ZNwejhzHRQEZHgkw6" target="_blank" rel="noreferrer">
                      109/1 DR. SURESH MUKHERJEE ROAD, KOLKATA-700 010
                      </a>
                  </p>
              </div>
          </div>
          <div class="company">
                  <div class="flip-box-front">
                  <h2>JYOTI LASER POINT</h2>
              </div>
              <div class="flip-box-back">
                  <p>
                      <a href="https://maps.app.goo.gl/xjY5rmzyGqqWLM1u8" target="_blank" rel="noreferrer">
                      63/2D SURYA SEN STREET, KOLKATA- 700 009
                      </a>
                  </p>
              </div>
          </div> */}
          </div>
          <button onClick={() => navigate('/')} className="back-button">← Back to Home</button>
          <footer className="bg-gray-800 text-white text-center p-4">
            <div className="flex justify-center space-x-4 mb-2">
              <div className="foot-social-icons">
              <a href="tel:+919836267009">
                {/* <i className="fas fa-phone" style={{ fontSize: '24px' }}></i> */}
                <FaPhone size={24} />
              </a>
              <a href="mailto:jyotigraphics008@gmail.com">
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

export default Branches;
