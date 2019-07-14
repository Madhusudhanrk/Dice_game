var scores,roundScore,activePlayer,activeGame,lastdice;

newgame();

document.querySelector('.btn-roll').addEventListener('click',function(){
//1.dice value for current score.	
 if(activeGame){
   var dice1=Math.floor((Math.random()*6)+1);
   var dice2=Math.floor((Math.random()*6)+1);

        // document.querySelector('#current-' + activePlayer).textContent = dice;
    
	      document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
	      document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';
	     document.querySelector('#dice-1').style.display = 'block';
	     document.querySelector('#dice-2').style.display = 'block';

	 if(dice1 !== 1 && dice2 !== 1){//check if 1 came or not.
	 	roundScore = roundScore+dice1+dice2;//2.adding current score.
	 	document.querySelector('#current-'+activePlayer).textContent=roundScore;
	 	// if(dice===6&&lastdice===6){ // coding challenge.
	 	// 	console.log(activePlayer);
	 	//     document.getElementById('score-'+activePlayer).textContent=0;
	 	// 	nextPlayer();
	 	// } 
	 }else{
        nextPlayer();
	 } 
	// lastdice=dice;  //coding challenge.
 }	  
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(activeGame){
	 	scores[activePlayer]=scores[activePlayer]+roundScore;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
       var input = document.querySelector('.winningscore').value;
       var winningscore;
       if(input){
         winningscore = input;
       }else{
       	 winningscore = 50;
       }
        if(scores[activePlayer]>=winningscore){//SCORE LIMITER
        	document.getElementById('name-'+activePlayer).innerHTML="Winner<i class='fas fa-grin-stars'></i>!";
        	document.getElementById('dice-1').style.display = 'none';
        	document.getElementById('dice-2').style.display = 'none';
        	document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            activeGame=false;
            console.log(activeGame);
        }else{
          nextPlayer();	
        }
    }    	   
});


function nextPlayer(){
	roundScore = 0;//3.making values if dices equals to 1 
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;

        activePlayer === 0?activePlayer=1:activePlayer=0;
 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}


document.querySelector('.btn-new').addEventListener('click',newgame);

function newgame(){
	scores = [0,0];
	roundScore=0;
	activePlayer=0;
	activeGame=true;
	 
	//the queryselector will fetch data and replace the data in selected element.
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	document.getElementById('score-0').textContent=0;
	document.getElementById('score-1').textContent=0;
	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
}