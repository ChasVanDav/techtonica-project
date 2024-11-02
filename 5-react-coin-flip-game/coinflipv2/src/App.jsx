import { useState } from 'react';
import './App.css';
import './style.css';
import Coin from './components/Coin.jsx';
import Stats from './components/Stats.jsx';
import Buttons from './components/Buttons.jsx';

const App = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [animation, setAnimation] = useState('');

  const flipCoin = () => {
    setIsFlipping(true);
    setAnimation('');
    const result = Math.random() < 0.5;

    setTimeout(() => {
      setAnimation(result ? 'spin-heads 3s forwards' : 'spin-tails 3s forwards');
    }, 100);

    setTimeout(() => {
      setIsFlipping(false);
      if (result) {
        setHeads(heads + 1);
      } else {
        setTails(tails + 1);
      }
    }, 3000);
  };

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
