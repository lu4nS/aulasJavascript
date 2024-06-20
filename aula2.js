/* 

//programa1
const userInput = prompt("Enter a number:");

if (userInput!== null) {
  const num = parseInt(userInput, 10);

  if (isNaN(num)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    if (num > 0 && num % 2 === 0) {
      console.log(`The number ${num} is even and positive.`);
    } else {
      console.log(`The number ${num} is neither positive or even.`);
    }
  }
} */


/* 

//programa 2
const weight = prompt("Enter your weight in kilograms:");


const height = prompt("Enter your height in meters:");

const bmi = calculateBMI(weight, height);

displayBMI(bmi);

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function displayBMI(bmi) {
  let message;

  if (bmi < 16) {
    message = "magreza grave";
  } else if (bmi >= 16 && bmi <= 16.9) {
    message = "magreza moderada";
  } else if (bmi >= 17 && bmi <= 18.5) {
    message = "magreza leve";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message = "peso ideal"
  } else if (bmi >= 25 && bmi <= 29.9) {
    message = "sobrepeso"
  } else if (bmi >= 30 && bmi <= 34.9) {
    message = "obesidade grau 1"
  } else if (bmi >= 35 && bmi < 39.9) {
    message = "obesidade grau 2 severa"
  } else if (bmi >= 40) {
    message = "obesidade morbida"
  }   

  console.log(`Your BMI is ${bmi.toFixed(2)}. ${message}`);
} */



/* 
//programa 3
const age = prompt("Enter your age:");

const price = prompt("Enter the price of the product:");

const finalPrice = calculateFinalPrice(age, price);

alert(`The final price is ${finalPrice}`);

function calculateFinalPrice(age, price) {
  if (age < 18) {
    return price * 0.9; 
  } else {
    return price; 
  }
}   */

// Prompt the user for a letter
const letter = prompt("Enter a letter:");

const lowerCaseLetter = letter.toLowerCase();

if (lowerCaseLetter === 'a' || lowerCaseLetter === 'e' || lowerCaseLetter === 'i' || lowerCaseLetter === 'o' || lowerCaseLetter === 'u') {
  alert(`The letter ${letter} is a vowel.`);
} else {
  if (lowerCaseLetter.match(/[a-z]/)) {
    alert(`The letter ${letter} is a consonant.`);
  } else {
    alert(`Invalid input. Please enter a letter.`);
  }
}