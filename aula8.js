var aula8 = {
    function1() {
        const button = document.getElementById('function1Button');
        const input = document.getElementById('function1Input');

        if (input.style.display === 'none') {
            input.style.display = 'block';
            button.style.display = 'block';
        } else {
            input.style.display = 'none';
            button.style.display = 'none';
        }

        button.addEventListener('click', () => {
            console.log(`Você digitou: ${input.value}`);
        })
    },

    function2(){
        const button = document.getElementById('function2Button');
        const input = document.getElementById('function2Input');
        const paragraph = document.getElementById('function2Paragraph')

        if (input.style.display === 'none') {
            input.style.display = 'block';
            button.style.display = 'block';
            paragraph.style.display = 'block'
        } else {
            input.style.display = 'none';
            button.style.display = 'none';
            paragraph.style.display = 'none'
        }

        button.addEventListener('click', () => {
            paragraph.innerText = `Paragrafo ${input.value}`
        })
    },
}
