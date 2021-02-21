function moneda(){

    this.nombre
    this.tipoDeCambio
    this.alertas = ['Introduzca una cantidad para realizar el cambio','La cantidad minima para realizar el cambio son 20€']

    this.convertir = function(cantidadacambiar){

        resultadoDeLaConversion = cantidadacambiar * this.tipodecambio

        let alertaHTML 

if (resultadoDeLaConversion<=0){

    alertaHTML = this.alertas[0]

}else if(cantidadacambiar<20){

    alertaHTML = this.alertas[1]


}else{

    alertaHTML = cantidadacambiar + ' ' + 'euros son'+' ' + resultadoDeLaConversion +''+ '$'
}



document.getElementById("resultadoDelCambio").innerHTML = alertaHTML

    }
}

let dolar = new moneda()
dolar.nombre ='Dolares'
dolar.tipodecambio = 1.2

let dirhan = new moneda()
dirhan.nombre ='Dirhan'
dirhan.tipodecambio = 10.78

function convertirMoneda(tipodemoneda){

    let cantidadIntroducida = document.getElementById('cantidad').value

    if(tipodemoneda =="dolar"){
        dolar.convertir(cantidadIntroducida)

    }

    else if(tipodemoneda =="dirhan"){
        dirhan.convertir(cantidadIntroducida)

    }

}