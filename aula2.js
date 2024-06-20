
function function1() {
    //programa1
    const userInput = prompt("Enter a number:");

    if (userInput !== null) {
        const num = parseInt(userInput, 10);

        if (isNaN(num)) {
            alert("Invalid input. Please enter a valid number.");
        } else {
            if (num > 0 && num % 2 === 0) {
                alert(`The number ${num} is even and positive.`);
            } else {
                alert(`The number ${num} is neither positive or even.`);
            }
        }
    }
}


function function2() {


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

        alert(`Seu IMC eh ${bmi.toFixed(2)}. ${message}`);
    }
}



function function3() {

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
    }
}


function function4() {
    //programa 4
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
}

function function5() {
    //programa 5

    const dayNumber = parseInt(prompt("Enter a number between 1 and 7:"));

    if (dayNumber >= 1 && dayNumber <= 7) {

        switch (dayNumber) {
            case 1:
                alert("Monday");
                break;
            case 2:
                alert("Tuesday");
                break;
            case 3:
                alert("Wednesday");
                break;
            case 4:
                alert("Thursday");
                break;
            case 5:
                alert("Friday");
                break;
            case 6:
                alert("Saturday");
                break;
            case 7:
                alert("Sunday");
                break;
        }
    } else {
        alert("Invalid input. Please enter a number between 1 and 7.");
    }
}

function function6() {
    //programa 6

    function isPrime(n) {
        if (n <= 1) {
            return false; 
        }
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true; 
    }

    const num = parseInt(prompt("Enter a number:"))
    
    if (isPrime(num)) {
        alert(`${num} is a prime number.`);
    } else {
        alert(`${num} is not a prime number.`);
    }

}
