//grab the coins and buttons
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

//initialize heads, tails counter to zero
let heads = 0;
let tails = 0;

//add event listener, use math.random for random number
flipBtn.addEventListener("click", () => {
    //multiply by 2 get whole numbers
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }

    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

//update head tails count
function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

//disable flip button while coin flips

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
    flipBtn.disabled = false;
    }, 3000);
}

//activate the reset button
resetBtn.addEventListener("click",() =>{
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});


//source: https://www.youtube.com/watch?v=QQh8PNp8KcQ