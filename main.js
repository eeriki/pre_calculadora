var t1 = document.querySelector('#num1')
var t2 = document.querySelector('#num2')

var resul = document.querySelector('#res')

var operador = 0
var opr= document.querySelector('.ope')

function resolver(){ 
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)      
    var result

    if(operador == 0){
            result = n1 + n2
    } else if(operador == 1){
        result = n1 - n2
    } else if(operador == 2){
        result = n1 * n2
    } else if(operador == 3){
        result = n1 / n2
    }

    resul.innerHTML = `Resultado: <strong>${result}</strong>`
}

function mudar(){
    operador+=1;
    resul.innerHTML = "Resultado: <strong>0</strong>"

    if(operador > 3){
        operador = 0;
    }

    switch(operador){
        case 0:
            opr.innerHTML = "+"
            document.body.style.background = "#777"
            document.body.style.color = "#000"
            break
        case 1:
            opr.innerHTML = "-" 
            document.body.style.background = "#666"
            document.body.style.color = "#111"
            break
        case 2: 
            opr.innerHTML = "x" 
            document.body.style.background = "#555"
            document.body.style.color = "#ddd"
            break
        case 3:
            opr.innerHTML = "/" 
            document.body.style.background = "#444"
            document.body.style.color = "#eee"
            break
    }  
}