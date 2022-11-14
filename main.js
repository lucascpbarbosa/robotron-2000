const robo = document.querySelector('.robo')
const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const controles = document.querySelectorAll('[data-controle]')


//forEach procura por todos os elementos dentro de um array. É necessário passar uma função, sendo o primeiro parametro o elemento em questao e o segundo parametro o seu index.
controles.forEach((elemento) => {
    //Adicionamos o evento de click em cada um dos elementos
    elemento.addEventListener('click', (evento) =>{
        //Evento é o que ocorre quando aquele elemento é clicado, 
        manipularValores(evento.target.dataset.controle, evento.target.parentNode)

    })
})
//A função recebe dois parametros, sendo qual operacao será feita e o outro de qual elemento estamos falando.
function manipularValores(operacao, controle){
    //Selecionamos o controle-contador especifico (graças ao pai ter sido selecionado na momento em que a funcao foi chamada)
    const peca = controle.querySelector('[data-peca]')

    if(operacao === '+'){
        var abc = Number(peca.value) + 1
        peca.value = abc
    }
    else{
        peca.value = Number(peca.value) - 1
    }
}


//Arrow function é usada para poucos (ou únicos) comandos. Caso tenha mais de uma linha de código, usar a função anônima.
robo.addEventListener('click', (evento) =>{alert('Oi!'); console.log(evento)})