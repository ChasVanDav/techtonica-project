import React from 'react';

const Buttons = ({ flipCoin, resetCount, isFlipping }) => {
  return (
    <div className="buttons">
      <button id="flip-button" onClick={flipCoin} disabled={isFlipping}>
        Flip
      </button>
      <button id="reset-button" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};

export default Buttons;
