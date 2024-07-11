var aula4 = {
    /// conteudo das aulas foi modificado de forma agora na aula 4 conter coisas ja vistas na aula3
    function1: function () {
        alert("open console")
        let number = 0
        while (number <= 0) {
            console.log(number)
            number++
        }
    },

    function2: function () {
        let soma = 0;

        while (true) {
            const input = prompt("Digite um número (ou qualquer outro caractere para sair): ");
            if (isNaN(parseFloat(input))) {
                break;
            }
            soma += parseFloat(input);
        }

        alert(`A soma final é: ${soma}`);
    },

    function3: function () {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber)

        while (true) {
            let guessNumber = prompt("try to guess the number from 1 to 10")
            if (isNaN(parseFloat(guessNumber))) {
                alert("not a number! program has stopped");
                break
            } else {
                if (guessNumber == randomNumber) {
                    alert("Right shot!")
                    break;
                } else {
                    alert("Try again")
                }
            }
        }
    },

    function4: function () {
        let saldo = 0;

        while (true) {
            let option = parseInt(prompt(`Choose an option 
                1. Ver saldo
                2. Depositar
                3. Sacar
                4. Sair`))

            if (option === 1) {
                alert(`Seu saldo é ${saldo}`)
            } else if (option === 2) {
                const valorDepositado = parseFloat(prompt("Digite valor a ser depositado"))
                saldo = saldo + valorDepositado
                alert("deposito realizado com sucesso")
            } else if (option === 3) {
                const valorSacado = parseFloat(prompt("Digite valor a ser sacado"))
                if (valorSacado <= saldo) {
                    saldo = saldo - valorSacado
                    alert("saque realizado com sucesso")
                } else {
                    alert("saldo insuficiente para este saque")
                }

            } else if (option === 4) {
                alert("tchau")
                break;
            }
        }
    },
}