//Creamos arreglos y variables

const botonNumeros = document.getElementsByName('numero')
const botonOperadores = document.getElementsByName('operaciones')
const botonIgual = document.getElementsByName('igual')[0]
const botonBorrar = document.getElementsByName('borrar')[0]
let result = document.getElementById('resultado')
let operacionActual = ''
let operacionAnterior = ''
let operacion = undefined

//Agregamos eventos para llamar metodos

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        insertarNumero(boton.innerText)
    })
})

botonOperadores.forEach(function(boton){
    boton.addEventListener('click',function(){
        seleccioneOperacion(boton.innerText)
    })
})

botonIgual.addEventListener('click', function(){
    calcular()
    actualizarDisplay()
})

botonBorrar.addEventListener('click', function(){
    clear()
    actualizarDisplay()
})
    
//Implementamos los metodos
function seleccioneOperacion(op){
    if(operacionActual === '')return
    if(operacionAnterior !== ''){
        calcular()
    }
    operacion = op.toString()
    operacionAnterior = operacionActual
    operacionActual = ''
}

function calcular(){
    let calculo
    const anterior = parseFloat(operacionAnterior)
    const actual = parseFloat(operacionActual)
    if(isNaN(anterior) || isNaN(actual))return
    switch (operacion) {
        case '+':
            calculo = anterior + actual
            break
            case '-':
            calculo = anterior - actual
            break
            case 'x':
                calculo = anterior * actual
                break
                case '/':
            calculo = anterior / actual
            break;
        default:return
            
    }
    operacionActual = calculo 
    operacion = undefined
    operacionAnterior = ''
}

function insertarNumero(num){
    operacionActual = operacionActual.toString() + num.toString()
    actualizarDisplay()
}

function clear(){
    operacionActual = ''
    operacionAnterior = ''                                              
    operacion = undefined
}                                                                   
function actualizarDisplay(){
    resultado.value = operacionActual
}

clear()