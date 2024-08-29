var aula11 = {
    function1() {
        array = [50, 45, 67, 89, 10, 5]
        const dobroNumeros = array.map(numero => numero * 2);
        const anchor = document.getElementById('aula11Function1Anchor')

        let newArray = document.getElementById("aula11function1NewArray");
        if (newArray) {
            console.log("alooo");
            newArray.parentNode.removeChild(newArray);
        } else {
            const theNewArray = document.createElement("p");
            theNewArray.id = "aula11function1NewArray";
            theNewArray.innerHTML = `Array original: ${array.join(', ')}<br>Array do dobro: ${dobroNumeros.join(', ')}`;
            anchor.insertAdjacentElement("afterend", theNewArray);
        }
    },
    function2(){
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        const pares = array.filter(numero => numero % 2 === 0)

        const anchor = document.getElementById('aula11Function2Anchor')

        let newArray = document.getElementById("aula11function2NewArray");
        if (newArray) {
            console.log("alooo");
            newArray.parentNode.removeChild(newArray);
        } else {
            const theNewArray = document.createElement("p");
            theNewArray.id = "aula11function2NewArray";
            theNewArray.innerHTML = `Array original: ${array.join(', ')}<br>Array dos pares: ${pares.join(', ')}`;
            anchor.insertAdjacentElement("afterend", theNewArray);
        }
    },
    function3(){
        array = [1, 2, 3, 4, 5, 6]
        const totalSum = array.reduce((acumulador, valor) => acumulador + valor, 0);

        const anchor = document.getElementById('aula11Function3Anchor')

        let newArray = document.getElementById("aula11function3NewArray");
        if (newArray) {
            console.log("alooo");
            newArray.parentNode.removeChild(newArray);
        } else {
            const theNewArray = document.createElement("p");
            theNewArray.id = "aula11function3NewArray";
            theNewArray.innerHTML = `Array original: ${array.join(', ')}<br>Soma total: ${totalSum}`;
            anchor.insertAdjacentElement("afterend", theNewArray);
        }
    },
    function4(){
        array = [50, 45, 67, 89, 10, 5]
        const sqrtNumeros = array.map(valor => valor ** 2);
        const anchor = document.getElementById('aula11Function4Anchor')

        let newArray = document.getElementById("aula11function4NewArray");
        if (newArray) {
            console.log("alooo");
            newArray.parentNode.removeChild(newArray);
        } else {
            const theNewArray = document.createElement("p");
            theNewArray.id = "aula11function4NewArray";
            theNewArray.innerHTML = `Array original: ${array.join(', ')}<br>Array dos quadrados: ${sqrtNumeros.join(', ')}`;
            anchor.insertAdjacentElement("afterend", theNewArray);
        }
    },
    function5(){
        array = ['hello', 'world', 'javascript', 'gepeto'];
        const uppercaseArray = array.map(string => string.toUpperCase());
        const anchor = document.getElementById('aula11Function5Anchor')

        let newArray = document.getElementById("aula11function5NewArray");
        if (newArray) {
            console.log("alooo");
            newArray.parentNode.removeChild(newArray);
        } else {
            const theNewArray = document.createElement("p");
            theNewArray.id = "aula11function5NewArray";
            theNewArray.innerHTML = `Array original: ${array.join(', ')}<br>Array uppercase: ${uppercaseArray.join(', ')}`;
            anchor.insertAdjacentElement("afterend", theNewArray);
        }
    },
    function6(){
        array = ['hello', 'world', 'js', 'gepeto', 'hi', 'winchester'];
        const arrayFiveChar = array.filter(string => string.length >= 5);
        const anchor = document.getElementById('aula11Function6Anchor')

        let newArray = document.getElementById("aula11function6NewArray");
        if (newArray) {
            console.log("alooo");
            newArray.parentNode.removeChild(newArray);
        } else {
            const theNewArray = document.createElement("p");
            theNewArray.id = "aula11function6NewArray";
            theNewArray.innerHTML = `Array original: ${array.join(', ')}<br>Array 5char: ${arrayFiveChar.join(', ')}`;
            anchor.insertAdjacentElement("afterend", theNewArray);
        }
    },
}