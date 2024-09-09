import React from 'react';
import TriviaGame from './TriviaGame'; 

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Celebrity Trivia Game</h1>
      <h3>Questions are auto-generated, so refresh the page for a new set of trivia questions!</h3>
      <TriviaGame />
    </div>
  );
}

export default App;