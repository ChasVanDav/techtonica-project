import React from 'react';

//buttons component takes three props responsible for button functionality
const Buttons = ({ flipCoin, resetCount, isFlipping }) => (

<div className="buttons">
    <button id="flip-button" onClick={flipCoin} disabled={isFlipping}>
        Flip
    </button>
    <button id="reset-button" onClick={resetCount}>
        Reset
    </button>
</div>
);

export default Buttons;