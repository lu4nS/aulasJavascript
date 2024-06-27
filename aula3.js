var aula3 = {

    function1: function () {
        let number = prompt("Enter a number and open your browser console")

        while (number > 0) {
            console.log(number)
            number--
        }
    },

    function2: function () {
        let numbers = [];

        while (true) {
            let response = prompt("Enter a number (or 'f' to calculate the average):");
            if (response.toLowerCase() === 'f') {
                break;
            }
            numbers.push(parseFloat(response));
            console.log(numbers)
        }

        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        let average = sum / numbers.length;
        alert(`The average of the numbers is: ${average}`);
    },

    function3: function(){
        let numbers = [];

        while (true) {
            let response = prompt("Enter a number (or '0' to calculate the sum):");
            if (response.toLowerCase() === '0') {
                break;
            }
            numbers.push(parseFloat(response));
            console.log(numbers)
        }

        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        alert(`The average of the numbers is: ${sum}`);
    },

    function4: function(){

    },

}