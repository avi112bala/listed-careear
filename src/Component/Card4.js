import React from 'react'
import { CardInfo } from './Cardinfo'

const Card4 = () => {
    const logo = CardInfo[3].logo
    const heading =CardInfo[3].heading
    const balance=CardInfo[3].balance
  return (
    <div className="card4">
      <div className="logo">{logo}</div>
      <div className="heading">
        <p>{heading}</p>
        <h2>{balance}</h2>
      </div>
    </div>
  );
}

export default Card4
