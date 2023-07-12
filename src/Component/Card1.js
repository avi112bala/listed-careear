import React from 'react'
import { CardInfo } from './Cardinfo'

const Card1 = () => {
    const logo=CardInfo[1].logo
    const heading=CardInfo[1].heading
    const balance=CardInfo[1].balance
  return (
    <div className="card1">
      <div className="logo">{logo}</div>
      <div className="heading">
        <p>{heading}</p>
        <h2>{balance}</h2>
      </div>
    </div>
  );
}

export default Card1
