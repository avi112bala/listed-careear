import React from 'react'
import { CardInfo } from './Cardinfo'
const Card3 = () => {

    const logo = CardInfo[2].logo
    const heading=CardInfo[2].heading
    const balance=CardInfo[3].balance
  return (
    <div className="card3">
      <div className="logo">{logo}</div>
      <div className="heading">
        <p>{heading}</p>
        <h2>{balance}</h2>
      </div>
    </div>
  );
}

export default Card3
