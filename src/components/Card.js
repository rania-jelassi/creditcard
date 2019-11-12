import React from "react";
import puce from "../assets/puce.png";
import visa from "../assets/visa.png";

function Card() {
  return (
    <div className="Card">
      <h1 className="title">CREDIT CARD</h1>
      <img src={puce} className="puce"></img>

<div className="footer">

      <div className="footer-card">
        <div>
          <p className="number">
            {" "}
            7352 {"  "} 3256 {"  "} 7895 {"  "} 1245{" "}
          </p>
          <div className="card-details">

            <div className="code">
              <p>5422</p>
              <p>CARDHOLDER</p>
            </div>

            <div className="label">
              <p>VALID &#8883;</p>
              <p>THRU</p>
            </div>

            <div className="validity">
              <p className="month"> Month/Year </p>
              <p className="Date"> 11/50</p>
            </div>
          </div >
        </div>
      </div>
      
      <img src={visa} className="visa-position"></img>

      </div>

    </div>
  );
}

export default Card;
