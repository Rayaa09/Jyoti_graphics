import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './TestApp.css';
import { FaInstagram, FaFacebook, FaPhone, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import Branches from "./Branches";


function App() {
    const navigate = useNavigate();
  return (
    <div className="App">
        <header>
          <picture>
            <img src="/jyoti-graphics.png" alt="Jyoti Graphics" style={{
              height: '150px',
              margin: '20px auto',
              display: 'block'
            }} />
          </picture>
          <p>Your Trusted Printing Partner</p>
          <div className="social-icons">
          <a href="tel:+919836267009">
                        <FaPhone size={24} color="white"/>
                      </a>
          <a href="mailto:jyotigraphics008@gmail.com">
                        <FaMailBulk size={24} color="white" />
                      </a>
          <a href="https://wa.me/919836267009" target="_blank" rel="noreferrer">
            <FaWhatsapp size={24} color="white" />
            </a>
          </div>
        </header>

        <div class="container">
          <div class="company">
            <div class="flip-box-front">
            <h2>JYOTI GRAPHICS</h2>
            </div>
            <div class="flip-box-back" onClick={() => navigate("/branches")}>
            <p>Click to Open the branches option</p>
            </div>
        
          </div>

          <div class="company">
            <div class="flip-box-front">
            <h2>JYOTI ENTERPRISE</h2>
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
              <a href="https://maps.app.goo.gl/NqA35seJL1R231Qw6" target="_blank" rel="noreferrer">
                35A Surya Sen Street Kolkata -700009
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
              <a href="https://maps.app.goo.gl/yXMrLj4yKeDPpZLn8" target="_blank" rel="noreferrer">
                109/1 Beleghata main road, Kolkata -700 010
              </a>
            </p>
          </div>
        </div>
        </div>
        
        <footer className="bg-gray-800 text-white text-center p-4">
          <div className="flex justify-center space-x-4 mb-2">
          <div className="social-icons">
            <a href="https://www.instagram.com/jyoti_print" target="_blank" rel="noreferrer">
            <FaInstagram size={24} color="white" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter size={24} color="white" />
            </a> */}
            <a href="https://facebook.com/share/1BYAcEmKrv/?mibextid=wwXlfr" target="_blank" rel="noreferrer">
            <FaFacebook size={24} color="white"/>
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