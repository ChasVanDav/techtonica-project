import React from 'react';

//receives heads and tails props from parent component
const Stats = ({ heads, tails }) => (
//displays the stats, specifically number of heads or tails flipped
    <div className="stats">
        <p>Heads: {heads}</p>
        <p>Tails: {tails}</p>
    </div>

);

export default Stats;