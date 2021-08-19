let comida;
let bebida;
let sobremesa;
let valor = 20;

function escolhePrato(aux) {
    document.getElementById(aux).style.borderColor = "green";
    if(aux== 'bife'){
        document.getElementById("frango").style.borderColor = "white";
        aux = 'bife à milanesa'
    } else{
        document.getElementById("bife").style.borderColor = "white";
        aux = 'frango assado com batata'
    }
 
    comida = aux;
}

function escolheBebida(aux) {
    document.getElementById(aux).style.borderColor = "green";
    if(aux == 'coca'){
        document.getElementById("suco").style.borderColor = "white";
        aux = 'coca-cola'
    } else{
        document.getElementById("coca").style.borderColor = "white";
        aux = 'suco natural'
    }
 
    bebida = aux;
}

function escolheSobremesa(aux) {
    document.getElementById(aux).style.borderColor = "green";
    if(aux == 'mousse'){
        document.getElementById("torta").style.borderColor = "white";
    } else{
        document.getElementById("mousse").style.borderColor = "white";
        aux = 'torta de bolacha'
    }
 
    sobremesa = aux;

    let myDiv = document.getElementById("botao");

    if((comida != null) && (bebida != null) && (sobremesa != null)){
        document.getElementById("botao").style.backgroundColor = "green";
        document.getElementById("botao").style.color = "white";
        document.getElementById("botao").style.cursor = "pointer";
        myDiv.classList.add('botao');
    }
}

function enviarCombo(){
    if(bebida == 'coca'){
        valor += 5;
    } else{
        valor += 4;
    }

    if(sobremesa == 'mousse'){
        valor += 3;
    } else{
        valor += 5;
    }

    let msg = "Olá eu quero " + comida + ", " + bebida + " e " + sobremesa + "!";
    let site =  "https://api.whatsapp.com/send?phone=5555999465308&text=" + msg
    
    window.open(site);
}