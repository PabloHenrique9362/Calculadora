function digitar(caractere) {
    
    let visor = document.getElementById("visor");

   
    if (isNaN(caractere) && visor.value == "0") {
       
        return; 
    }

    
    if (visor.value == "0") {
       
        visor.value = caractere;
    } else {
       
        visor.value = visor.value + caractere;
    }
}

function limpar() {
    
    document.getElementById("visor").value = "0";
}

function retirar() {
    let visor = document.getElementById("visor");

    if (visor.value.length > 1) {
        visor.value = visor.value.slice (0, -1);
    } else {
        visor.value = "0";
    }
}
// Função que processa toda a expressão matemática (botão =)
function calcular() {
    
    let visor = document.getElementById("visor");
    
   
    let resultado = eval(visor.value);
   
      
    visor.value = resultado;
}