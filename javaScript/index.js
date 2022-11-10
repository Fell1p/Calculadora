let display = document.querySelector("#display")
let res = document.querySelector(".result")
let limpa = document.querySelector(".tecla-limpar")

function calcular(){
    
    let resultado = eval(display.value)   
    res.innerHTML = `${resultado}`

    console.log(resultado)
}

function limpar(limpa){
    res.innerHTML = " "
}
