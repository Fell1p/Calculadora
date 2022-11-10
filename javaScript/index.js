let display = document.querySelector(".visor")
let res = document.querySelector(".result")
let limpa = document.querySelector(".tecla-limpar")

function calcular(){

    let resultado = eval(display.value)   
    res.innerHTML = `${resultado}`

    display.value = " "
}

function limpar(){
    res.innerHTML = " "
}
