document.addEventListener("DOMContentLoaded", () => {
// card options
const cardArray = [
{
  name: "fries",
  img: "images/snjesko100.png"
},
{
  name: "cheeseburger",
  img: "images/mama.png"
},

{
  name: "ice-cream",
  img: "images/pasa.png"
},

{
  name: "milkshake",
  img: "images/more.png"
},
{
  name: "tata",
  img: "images/tata.png"
},
{
  name: "nene",
  img: "images/nene.png"
},
{
  name: "dede",
  img: "images/dede.png"
},
{
  name: "civare",
  img: "images/civare.png"
},
{
  name: "irma",
  img: "images/irma.png"
},
{
  name: "keka",
  img: "images/keka.png"
},
{
  name: "ljut",
  img: "images/ljut.png"
},
{
  name: "mamatata",
  img: "images/mamatata.png"
},
{
  name: "fries",
  img: "images/snjesko100.png"
},
{
  name: "cheeseburger",
  img: "images/mama.png"
},

{
  name: "ice-cream",
  img: "images/pasa.png"
},

{
  name: "milkshake",
  img: "images/more.png"
},{
  name: "tata",
  img: "images/tata.png"
},
{
  name: "nene",
  img: "images/nene.png"
},
{
  name: "dede",
  img: "images/dede.png"
},
{
  name: "civare",
  img: "images/civare.png"
},
{
  name: "irma",
  img: "images/irma.png"
},
{
  name: "keka",
  img: "images/keka.png"
},
{
  name: "ljut",
  img: "images/ljut.png"
},
{
  name: "mamatata",
  img: "images/mamatata.png"
}
]

// const audio = new Audio("sounds/nononono-cat-mp3cut.mp3");
const hooray_sound = new Howl({
			src: ['sounds/16-Children Yeah.mp3']
		});
const no_sound = new Howl({
			src: ['sounds/2-Oh No.mp3']
		});
 const yes_sound = new Howl({
			src: ['sounds/1-Funny Bell.mp3']
		});   

const laugh_sound = new Howl({
  src: ['sounds/14-Funny Laugh.mp3']
})

let Laugh = false;

//randomly sotred array
cardArray.sort(() => 0.5 - Math.random());

//console.log(cards)

const grid = document.querySelector(".grid");
const resultDisplay = document.getElementById("result");

let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard(){
  
    for (let i=0; i < cardArray.length; i++ ){
      
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id",i);
      card.addEventListener("click", flipCard)
      grid.appendChild(card);

  }
}



function flipCard() {
  //whatver card is at the moment...
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenId)
  this.setAttribute("src",cardArray[cardId].img)
  if (cardsChosen.length === 2){
    setTimeout(checkForMatch,200)
  }
}

function checkForMatch(){
  const cards = document.querySelectorAll("img")
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

  if (optionOneId === optionTwoId)
  { 
    alert("You have clicked the same image!")
    cards[optionOneId].setAttribute("src","images/blank.png")
    cards[optionTwoId].setAttribute("src","images/blank.png") 
  } else if (cardsChosen[0] === cardsChosen[1]){
    //alert("You have found a match!")
   
    // cards[optionOneId].setAttribute("src","images/white.png")
    // cards[optionTwoId].setAttribute("src","images/white.png") 
    cards[optionOneId].removeEventListener("click",flipCard)
    cards[optionTwoId].removeEventListener("click",flipCard)
    cardsWon.push(cardsChosen)
    yes_sound.play();
  } else {
    cards[optionOneId].setAttribute("src","images/blank.png")
    cards[optionTwoId].setAttribute("src","images/blank.png") 
    if (!Laugh) { 
      no_sound.play();
      Laugh = true;
    } else {
      laugh_sound.play();
      Laugh = false;
    }
    
    //alert("Sorry, try again!")
  }
 
   cardsChosen = []
   cardsChosenId = []
  
   resultDisplay.textContent = cardsWon.length.toString();

   if (cardsWon.length === cardArray.length / 2) { 
     resultDisplay.textContent = " Congratualtions! You have Won!"
      hooray_sound.play();
      }
    

}


createBoard();
})