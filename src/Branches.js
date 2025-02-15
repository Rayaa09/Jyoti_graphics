import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Keep styling if needed

function Branches() {
  return (
    <div className="branches-page">
      <h2>Our Branches</h2>
      <ul>
        <li>UNIT 1 - 35A SURYA SEN STREET, KOLKATA- 700 009</li>
        <li>UNIT 2 - 30A CANAL EAST ROAD, KOLKATA- 700 011</li>
        <li>UNIT 3 - 9/2 CHINTAMONI DAS LANE, KOLKATA- 700 009</li>
        <li>UNIT 4 - 109/1 DR. SURESH MUKHERJEE ROAD, KOLKATA-700 010</li>
        <li>UNIT 5 - 63/2D SURYA SEN STREET, KOLKATA- 700 009</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default Branches;
