var aula6 = {
    function1() {
        while(true){
            let num = prompt("Digite um numero para saber se positivo ou negativo. NaN cancela")
            if(isNaN(num)){
                break
            }
            this.functionPositiveNegative(num)
        }
        
        
    },
    functionPositiveNegative(num) {
        if (num > 0) {
            return alert(`O número ${num} é positivo.`);
        } else if (num < 0) {
            return alert(`O número ${num} é negativo.`);
        } else {
            return alert(`O número ${num} é zero.`);
        }
    },
    function2(){
        while(true){
            let num = prompt("Digite um numero para saber se par ou impar. NaN cancela")
            if(isNaN(num)){
                break
            }
            this.functionEvenOdd(num)
        }
    },
    functionEvenOdd(num){
        if (num % 2 === 0) {
            return alert(`O número ${num} é par.`);
        } else {
            return alert(`O número ${num} é impar.`);
        }
    },
    function3(){
        while(true){
            let speed = prompt("Digite um numero para saber se par ou impar. NaN cancela")
            if(isNaN(speed)){
                break
            }
            this.functionSpeedLimit(speed)
        }
    },
    functionSpeedLimit(speed){
        if(speed > 50){
            alert('Acima da velocidade de 50km/h')
        } else{
            alert('Velocidade permitida')
        }
    },
    function4(){
        while(true){
            let travelledDistance = prompt("Digite a distancia de quilometros percorridos. Nan Cancela ")
            if(isNaN(travelledDistance)){
                break
            }
            this.functionFuelSimulation(travelledDistance)
        }
    },
    functionFuelSimulation(travelledDistance){
        let consumo = travelledDistance / 10
        return alert(`consumo da viagem ${consumo} litros consumidos`)
    }
}



// 1. Escreva uma função que lê um número e informa se o número é positivo ou negativo
// 2. Escreva uma função que lê um número e informa se ele é par ou ímpar
// 3. Escreva uma função que lê a velocidade de um veiculo e informe se ele está acima ou dentro do limite (limite = 50)
// 4. Escreva uma função que lê a distancia percorrida em uma viagem e informa quando de combustivel ele gastou nessa viagem considerando que o veiculo faz 10km/l
// 5. Escreva uma função que lê um valor de horas inteiro e informa quantos minutos e segundos esse valor tem