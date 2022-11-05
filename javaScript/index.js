const teclaNumero = document.querySelector(".num").value

const operacao = document.querySelector(".operador")

const limpar = document.querySelector(".tecla-limpar")
const igual = document.querySelector(".tecla-igual")

let display = document.querySelector(".visor")

function calcular(valor){
    display.innerHTML += valor
}