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
let historico = [];
function calcular() {
    
    let visor = document.getElementById("visor");
    
    let conta = visor.value

    try {
        if (conta.includes("√")) {
            
            let numero = conta.replace("√", "");
            let resultado = Math.sqrt(Number(numero));

            visor.value = resultado;
            historico.push("√" + numero + " = " + resultado);
            atualizarHistorico();
            return;
        }
        if (conta.includes("%")) {

            let numero = conta.replace("%", "");
            let resultado = Number(numero) / 100;

            visor.value = resultado;
            historico.push(numero + "% = " + resultado);
            atualizarHistorico();
            return;
        }

    let resultado = eval(conta);

    visor.value = resultado;
    
    historico.push(conta + '=' +resultado)

    atualizarHistorico();

    } catch {
            visor.value = "Erro";
    }
}
function atualizarHistorico() {
        let divHistorico = document.getElementById('historico');

        divHistorico.innerHTML = "";

        historico.forEach(function(item) {
            divHistorico.innerHTML += "<p>"+ item +"</p>";
        });
    }