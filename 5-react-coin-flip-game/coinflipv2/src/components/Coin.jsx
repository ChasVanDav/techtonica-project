import React from 'react';
import headsImage from '../assets/quarter_heads.jpg';
import tailsImage from '../assets/quarter_tails.png';

//coin component receives animation prop
const Coin = ({ animation }) => (

    <div classname="coin" style={{ animation }}>
        <div className="heads">
            <img src={headsImage} alt="head side of an American 25 cents coin" />
        </div>
        <div classname="tails">
            <img src={tailsImage} alt="tail side of an American 25 cents coin" />
        </div>
    </div>


);

export default Coin;