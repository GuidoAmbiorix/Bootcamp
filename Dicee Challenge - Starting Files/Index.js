const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

const randomNumber1 = (Math.floor( Math.random() * 6 + 1));
const randomNumber2 = (Math.floor( Math.random() * 6 + 1));

const randomImage1 = "dice"+randomNumber1+".png";
const randomImage2 = "dice"+randomNumber2+".png";


const randomImageSource1= "images/" + randomImage1;
const randomImageSource2 = "images/" + randomImage2;

img1.setAttribute('src',randomImageSource1);
img2.setAttribute('src',randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector('.Win-lose').innerHTML = 'Player 1 Win';
}else if(randomNumber2 >randomNumber1){
    document.querySelector('.Win-lose').innerHTML = 'Player 2 Win';
}else{
    document.querySelector('.Win-lose').innerHTML = 'Draw';
}