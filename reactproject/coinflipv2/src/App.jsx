import { useState } from 'react'
import './App.css' 
import './style.css'
import headsImage from "./assets/quarter_heads.jpg"
import tailsImage from "./assets/quarter_tails.png"

//default states for each component
const App = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [animation, setAnimation] = useState('');

  //on click --> flip coin
  const flipCoin = () => {
    setIsFlipping(true);
    setAnimation('');
    
    //if the output is less than 0.5, result is true (-> heads)
    const result = Math.random() < 0.5;
    //true = heads, false = tails; trigger animation
    setTimeout(() => {
      setAnimation(result ? 'spin-heads 3s forwards' : 'spin-tails 3s forwards');
    //slight delay triggering animation
    }, 100);

    //increment heads or tails by 1 based on result
    setTimeout(() => {
      //when animation stops
      setIsFlipping(false);
      if (result) {
        setHeads(heads + 1);
      } else {
        setTails(tails + 1);
      }
      //score is timed to appear when animation stops (3s)
    }, 3000);
  };

  //reset button set states to zero and no animation
  const resetCount = () => {
    setHeads(0);
    setTails(0);
    setAnimation('');
  };

  return (
    <div className="container">
      <div className="coin" style={{ animation }}>
        <div className="heads">
          <img src={headsImage} alt="head side of an American 25 cents coin" />
        </div>
        <div className="tails">
          <img src={tailsImage} alt="tail side of an American 25 cents coin" />
        </div>
      </div>
      <div className="stats">
        <p>Heads: {heads}</p>
        <p>Tails: {tails}</p>
      </div>
      <div className="buttons">
        <button id="flip-button" onClick={flipCoin} disabled={isFlipping}>
          Flip
        </button>
        <button id="reset-button" onClick={resetCount}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
