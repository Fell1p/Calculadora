let display = document.querySelector("#display")
let res = document.querySelector(".result")

function calcular(){
    
    let resultado = eval(display.value)   
    res.innerHTML = `${resultado}`

    console.log(resultado)
}