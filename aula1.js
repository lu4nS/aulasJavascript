
var aula1 = {
    function1: function () {
        const nome = prompt("Qual é o seu nome?");
        const mensagem = `Olá, ${nome}! Seja bem-vindo(a).`
        alert(mensagem);
    },
    function2: function () {
        const numero1 = prompt("Digite o primeiro número:");
        const numero2 = prompt("Digite o segundo número:");
        const soma = parseInt(numero1) + parseInt(numero2);
        alert(`A soma dos números ${numero1} e ${numero2} é ${soma}.`)
    },
    function3: function () {
        const idade = prompt("Digite sua idade:");
        const anoNascimento = 2024 - parseInt(idade);
        alert(`Você nasceu em ${anoNascimento}.`)
    },
    function4: function () {
        const raio = prompt("Digite o raio do círculo:");
        const area = Math.PI * Math.pow(parseFloat(raio), 2);
        alert(`A área do círculo é de aproximadamente ${area.toFixed(2)} unidades quadradas.`)
    }
}

