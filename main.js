const robo = document.querySelector('.robo')
const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const braco = document.querySelector('#braco')
const controles = document.querySelectorAll('.controle-ajuste')

controles.forEach((elemento) =>{
    elemento.addEventListener('click', (evento) =>{
        console.log(elemento)
        console.log(evento)
    })
})

function manipularValores(operacao){
    if(operacao === '+'){
        var abc = Number(braco.value) + 1
        braco.value = abc
    }
    else{
        braco.value = Number(braco.value) - 1
    }
}
//Arrow function é usada para poucos (ou únicos) comandos. Caso tenha mais de uma linha de código, usar a função anônima.
robo.addEventListener('click', (evento) =>{alert('Oi!'); console.log(evento)})