import React from 'react'
import { CardInfo } from "./Cardinfo";
import '../App.css'

const Card = () => {

 const heading=CardInfo[0].heading;
 const logo =CardInfo[0].logo
 const balance=CardInfo[0].balance;
  return (
    <div className="card0">
      <div className="logo">{logo}</div>
      <div className="heading">
        <p>{heading}</p>
        <h2>{balance}</h2>
      </div>
     
    </div>
  );
};

export default Card
