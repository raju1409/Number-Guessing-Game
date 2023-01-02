const answer = Math.floor(Math.random()*10+1);
let guesses = 0;
document.getElementById("submitbtn").onclick=function(){

    let guess = document.getElementById("guessfield").value;
    guesses += 1;
    if (guess == answer){
        document.getElementById("result").innerHTML = `You WON !!! it took ${guesses} guesses`;
    }else if(guess>answer){
        document.getElementById("result").innerHTML = `Too long Try again `;

    }else{
        document.getElementById("result").innerHTML = `Too short Try again`;
    }

}