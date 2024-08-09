// add event listener to coin using '.onclick'

document.getElementById("coin").onclick = function() {
    // math.random() generates random numbers between 0 and 1.
    // assign 0~0.5 to "isHeads"
    let isHeads = Math.random() < 0.5;

    let coinImage = document.getElementById("coin");
    
    //classList.add initialize flipping
    coinImage.classList.add('flipping');
    setTimeout(() => {
        // coinImage.src = isHeads ? "" : "";
        //call the result element and assign value of "heads" or "tails" 
        // based on result of 'isHeads' --> true = "heads" abd false = "tails"
        document.getElementById("result").innerText = isHeads ? "Heads" : "Tails";
        // classList.remove to end flipping and reset
        coinImage.classList.remove('flipping');
    }, 1000);
};


// Current issues:
// the timing between the end of the flipping and the display of the results are off
// I can't get the tail to show for the result let alone while flipping
// why does it flip twice???