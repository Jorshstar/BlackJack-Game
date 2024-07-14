//When we ask Javacript to count we have to specify
// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?
//the first count is t6he starting line while the second count which is the finish line is saying that we should not count up to 11 and the third count which is the stepsize is the we should inctreament with 1
//start            Finish         Step size
// for (let count = 10; count < 21; count+= 1) {
//   console.log(count)
// }
// for (let i = 0; i < 6; i+=1) {
//   console.log(i)
// }
// Create a for loop that is from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for (let i = 10; i < 101; i +=10 ) {
//   console.log(i)
// }

//combining for loops with arrays
//putting this m,essages on its own line
//using mesaged.length helps check the length of the array instead of writtig the numbers directly
// let messaged = [
//   "Hey, how's it going?",        
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here!",
//   "Great!",
//   "Cool!"

// ]
// // console.log(messaged[0])
// console.log(messaged[1])
// console.log(messaged[2])
// console.log(messaged[3])
// for (let i = 0; i < messaged.length; i+=1) {
//   console.log(messaged[i])
// }

// let num = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greeting = ["Hey, how's it going?", "I'm great, thank you! How about you?", "All good. Been working on my portfolio lately.", "Same here!", "Great!", "Cool!"]
// let greetingEl = document.getElementById("greeting-el")
// let greetingsEl = document.getElementById("player-el")

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " "
// }

// for (let i = 0; i < greeting.length; i ++ ) {
//   greetingsEl.textContent += greeting[i]
// }

//Returning Values
//return a value that returns the fastest race time
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time
  } else if ( player2Time < player1Time ) {
    return player2Time
  }else {
    return player1Time
  }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function getTotalRaceTime() {
  let totalRaceTime = player1Time + player2Time
  return totalRaceTime
}

let total = getTotalRaceTime()
console.log(total)


//Generating Random Numbers
//random number generates number from 0 and 1 wityhout including 1

let randomNumber = Math.random()

console.log(randomNumber)
//multiplying by  6 makes it run from 0 to 5.999
let randomNumbers = Math.random() * 6
console.log(randomNumbers)

//using Math.floor rounds down to the nearest whole number
let flooredNumber =  Math.floor(3.45632)
console.log(flooredNumber)

//combining Math.fllor and Math.Random
let diceNumber = Math.floor(Math.random() * 7)

console.log(diceNumber)

//  rollDice(), that returns a random number between 1 and 6
let rollDice = Math.floor(Math.random() * 6) + 1
console.log(rollDice)
// Create a function, rollDices(), that returns a random number between 1 and 6
function rollDices() {
  let randomNumber = Math.floor(Math.random() * 6) + 1
  return randomNumber
}

console.log(rollDices())

//Logical Operators
let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse && givesCertificate) {
  generateCertificate()

}

function generateCertificate() {
    console.log("Generating certificate....")
}

let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution()

}

function showSolution() {
    console.log("Showing the solution....")
}

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie()

}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!")
}

// Objects - store data in-depth - objects are called composite / complex data type
// key-value pairs
let course = {
  title : "Learn Css Grid for free",
  lessons: 16,
  creator: "Per Herald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", 
    "css",  
    "grid", 
    "cssgrid", 
    "webdev"
  ],
}

console.log(course.tags)

//Methods are functions that are attached to objects
//Functions are called on objects


// // Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation
let castle = {
  hasDorrs: true,
  name: "Joshua's House",
  price: 100,
  description:[
    "The house is in the middle of the city",
    "It is big, and has a lot of stuff",
    "It is very nice",
    "It has very many windows"
  ]

}
console.log(castle.name)
console.log(castle.hasDorrs)
console.log(castle.description)

//practicing objects
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
let person = {
  name: "Joshua",
  age: 25,
  country: "Nigeria"
}

function logData() {
  console.log(person.name + " " + "is " + person.age + " " + "years old and lives in" + " " + person.country) 
}

logData()

let age = 69
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
if (age < 6) {
  console.log("free")
}else if (age >=6 && age <= 17) {
  console.log("child discount")
}else if (age >= 18 && age <= 26) {
  console.log("student discount")
}else if (age >= 27 && age <= 66) {
  console.log("full price")
}else {

  console.log("senior citizen discount")
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The Five largest country in the world: ")

for (let i = 0; i <largeCountries.length; i++ ) {
  console.log(" - " + largeCountries[i])
}

let largeCountry = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountry.pop()
console.log(largeCountry)
largeCountry.push("Pakistan")
console.log(largeCountry)
largeCountry.shift()
console.log(largeCountry)
largeCountry.unshift("China")
console.log(largeCountry)

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱")
}else {
  console.log("Its a really good day to play ball")
}

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function randomItem () {
  let randomIndex = Math.floor(Math.random() * 3)
  return hands[randomIndex]
}
console.log(randomItem())


let classes = ["ss1", "ss2", "ss3"]

function whichClass () {
  let randomClass = Math.floor(Math.random() * 3)
  return classes[randomClass]
}
console.log(whichClass())

// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 

    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
//     let randomIndex = Math.floor(Math.random() * fighters.length)
//     let randomIndex2 = Math.floor(Math.random() * fighters.length)
//     let fighter1 = fighters[randomIndex]
//     let fighter2 = fighters[randomIndex2]
//     stageEl.textContent = fighter1 + " vs " + fighter2

// })

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

// function sortFruit() {
//   for (let i = 0; i < fruit.length; i++) {
//       if (fruit[i] === "🍎") {
//           appleShelf.textContent += "🍎"
//       } else if (fruit[i] === "🍊") {
//           orangeShelf.textContent += "🍊"
//       }
//   }
// }

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function() {
//     // Challenge:
//     // When the user clicks on the "Pick Fighters" button, pick two random 
//     // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
//     let randomIndex = Math.floor(Math.random() * fighters.length)
//     let randomIndex2 = Math.floor(Math.random() * fighters.length)

//     let fighter1 = fighters[randomIndex]
//     let fighter2 = fighters[randomIndex2]

//     stageEl.textContent = fighter1 + " vs " + fighter2

// })









// let firstCard = 20
// let secondCard = 9
// let sum = firstCard + secondCard

// if (sum < 21) {
//   console.log("Do you want to draw a new card? 🙂");
// } else if (sum === 21) {
//   console.log("woohoo! You've got Blackjack! 🥳");
// } else {
//   console.log("You're out of the game! 😭");
// }

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 19

// if (age < 21) {
//   console.log("You are not old enough to enter the club")
// } else{
//   console.log("Welcome!")
// }

// Check if the person is elegible for a birthday card from the King! (100)

// let aged = 150

// if (aged < 100) {
//   console.log("Not eligible")
// }else if (aged === 100) {
//   console.log("Here is your birthday card from the King!")
// }else{
//   console.log("Not eligible, you have already gotten one")
// }

//Arrays are ordered list of items

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
// let description = [
//   name = "Joshua",
//   age = 20,
//   pizza = true
// ]
// console.log(description)

// let num = [7, 4]

// num.push(6)//we use push to add to an existing array
// num.pop(4)//we use pop to remove from an existing array
// console.log(num)

// let messages = [
//   "Hey, how's it going?",        
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop(newMessage)
// console.log(messages)


//----------------------------------------------------------------------
//-----------------------------------------------------------------

//////////////////BLACK JACK GAME

 let cards = []//array - ordered list of items
let sum = 0
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = false

let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
// let sumEl = document.querySelector('#sum-el')
let cardEl = document.getElementById('cards-el') 

let player = {
  name: "Joshua",
  chips: 150
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ":$" + player.chips

// 1. Create a function, getRandomCard(), that always returns the number 5
//functions are accessible at anywhere in a code
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  // if 1     -> return 11
    // if 11-13 -> return 10
    if (randomNumber === 1) {
      return 11
    }else if(randomNumber > 10) {
      return 10
    }else{
      return randomNumber
    }
}

function startGame () {
  //putting thisnin the start game will make the game start everythin time i click on start
   // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can st
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()

  cards = [firstCard, secondCard]
  sum = firstCard + secondCard


  renderGame()
}

function renderGame() {
  cardEl.textContent = "Cards: "
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++ ) {
    cardEl.textContent += cards[i] + " "

  }


  sumEl.textContent = "Sum:" + sum
  if (sum <= 20) {
    message = 'Do you want to draw a new card? 🙂';
    
  } else if (sum === 21) {
    message = 'woohoo! You\'ve got Blackjack! 🥳';
    hasBlackJack = true;
  } else {
    message = 'You\'re out of the game! 😭';
    isAlive = false;
  }
  messageEl.textContent = message
  
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive === true && hasBlackJack ===false) {
    // 3. Use the getRandomCard() to set the value of card
    let card = getRandomCard()
    sum += newCard//this is how to add to an existing variable
    cards.push(card)
    
  
  
    renderGame()

  }

  
}


