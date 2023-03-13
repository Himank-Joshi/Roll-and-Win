
//refresh me

// You can use window.performance.navigation.type . It will be 0 if you are coming through a URL. 
// It will be 1 if you are refreshing, and it will be 2 if you are coming using the 
// forwards/backwards buttons in your web browser. This is how I have used it:
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rolldice();
}


function rolldice(){
//number1
var randomNumber1=Math.floor( (Math.random()*6) )+1;   //floor makes range till 5

var randomDice1="images/dice"+randomNumber1+".png";    //choosing image acc to random num
//  let img1 = `images/dice${randomNumber1}.png`;
var image1=document.querySelector(".dice img");

image1.setAttribute("src",randomDice1);

//number2
var randomNumber2=Math.floor( Math.random()*6 )+1;
var randomDice2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2);

//result
var heading=document.querySelector(".container h1");

if(randomNumber1 > randomNumber2)
heading.innerHTML="🚩 Player 1 wins";
else if(randomNumber1 < randomNumber2)
heading.innerHTML="Player 2 wins 🚩";
else
heading.innerHTML="Draw 🤝";

}