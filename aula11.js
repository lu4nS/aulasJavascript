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
            theNewArray.textContent = `Array orignal: ${array.join(', ')}\nArray do dobro: ${dobroNumeros.join(', ')}`;
            anchor.insertAdjacentElement("afterend", theNewArray);
        }
    }
}