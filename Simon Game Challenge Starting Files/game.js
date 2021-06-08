
const buttonColours = ['red','blue','green','yellow'];
const gamePattern = [];



function nextSequence(){
    randomNumber = Math.floor(Math.random()*4+0)
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio('./sounds/' + randomChosenColour + '.mp3');
     audio.play();
  
}

nextSequence();