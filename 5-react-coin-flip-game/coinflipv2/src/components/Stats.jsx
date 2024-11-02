import React from 'react';

const Stats = ({ heads, tails }) => {
  return (
    <div className="stats">
      <p>Heads: {heads}</p>
      <p>Tails: {tails}</p>
    </div>
  );
};

export default Stats;