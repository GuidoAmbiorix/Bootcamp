
const buttonColours = ['red','blue','green','yellow'];
const gamePattern = [];
const userClickPatter = [];


$(".btn").click(function(e){

    var userChosencolour = $(this).attr("id");
    userClickPatter.push(userChosencolour);

    playSound(userChosencolour);
    animatePress(userChosencolour);
    console.log(userClickPatter);

 });



function nextSequence(){
    randomNumber = Math.floor(Math.random()*4+0)
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
  
}




function playSound(name){

    var audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();


}


function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);

}