import { useState } from 'react'
import './App.css' 
import './style.css'
import Coin from './components/Coin.jsx';
import Stats from './components/Stats.jsx';
import Buttons from './components/Buttons.jsx';

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
      <Coin animation={animation} />
      <Stats heads={heads} tails={tails} />
      <Buttons flipCoin={flipCoin} resetCount={resetCount} isFlipping={isFlipping} />
    </div>
  );
};

export default App;
