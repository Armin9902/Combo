const buttom = document.querySelector(".btn");
const game = document.querySelector(".game");
const h1 = document.querySelector("h1");
const guidance = document.querySelector(".guidance");

let playgame=false;
let i;
let s=0;
let n=0;
let text = document.createElement("p");
text.classList="text";

buttom.addEventListener("click", function(){
  if(!playgame){    
      playgame = true;
      s=0;
      n=0; 
      game.innerHTML="";
      farmingGame(); 
      buttom.textContent="check";
      h1.style.display="none";
      guidance.style.display="none";
      game.before(text);
      text.innerHTML=`Guess: <br> guesses: ${0}`;
  }
  else{  
        const numbers = document.querySelectorAll(".inp");
        s=s+1;
        text.innerHTML=`Guess: <br> guesses: ${s}`;   
        n=0;    
        for(i=0;i<numbers.length;i++){
            if(numbers[i].value==numbers[i].correct){
                numbers[i].style.backgroundColor="green";
                n++;
            }
            else{
             let color = (numbers[i].value<numbers[i].correct) ? "red": "blue";
             numbers[i].style.backgroundColor=color;
            }
            if(n==numbers.length){
                endGame();
            }

            
        }
      
  }
})
function endGame(){
        text.innerHTML=`Guess: <br> guesses: ${s} <br> You solved the Combo in ${s} Guesses`;  
         playgame=false;
         buttom.innerHTML="Restart Game";
         s=0;
         n=0;
}
function farmingGame(){
    for(i=0;i<7;i++)
    {
        let inp = document.createElement("input")
        inp.classList="inp";
        inp.type="number";
        inp.min="0";
        inp.max="9";
        inp.correct=Math.floor(Math.random()*10);
        inp.value="0";
        game.appendChild(inp);
    }

}