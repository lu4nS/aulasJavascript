var aula5 = {
    function1: function () {
        const nomes = ['Davi', 'Pedro', 'Francisco']

        nomes.push('João')
        nomes.unshift('Kelly')
        nomes[2] = 'Debora'
        console.log(nomes)
        nomes.splice(2, 1, 'Italo', 'Abel')
        console.log(nomes)
    },

    function2: function () {
        const nomes = []

        while (true) {
            let opcao = prompt(`1. adicionar novo usuario
        2. remover o ultimo da lista
        3. exibir lista`)
            if (opcao.toLowerCase() === 'sair') {
                break
            } else {
                opcao = parseInt(opcao)
                if (opcao == 1) {
                    const novousuario = prompt("Digite nome a ser adicionado")
                    nomes.push(novousuario)
                } else if (opcao == 2) {
                    nomes.pop()
                    alert("utlimo usuario deletado com sucesso")
                } else if (opcao == 3) {
                    alert(nomes)
                }
            }
        }
    },

    function3: function(){
        const cores = ['vermelho', 'verde', 'azul']
        cores.push('amarelo','roxo')
        cores.pop()
        cores.splice(1,1,'laranja', 'marrom')
        novasCores = cores.slice(0,1)
        let stringCores = cores.join(', ')
        cores.reverse()
        const listaCores = cores.concat(novasCores)
        alert(`lista de cores concatenadas /n ${listaCores}`)
    },
}