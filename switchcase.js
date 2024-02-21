const sortear = () => {
    let nomes = ["SARINHA", "MARIAZINHA", "VIVIANE", "BELLA", "LAURINHA"];

    let h1Nome = document.getElementById("nome");

    let achouNumero = false;  // o = e um valor de atribuicao, entao recebe.
    let numeroSorteado;

    while (achouNumero == false) { //while = enquanto: alogoritmo, extrutura de repeticao.
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    }
    switch (numeroSorteado) {  //switch = trocar em caso de zero
        case 0:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;

        default: //caso nao tenha numero, ele da uma mensagem padrao
            h1Nome.innerText = "Ops! nome nao consta na lista.";
            break;
    }
    h1Nome.innerText += "O numero sorteado foi: " + numeroSorteado; // += recebe a propria variavel com o proprio metodo, mais oq eu qro q apareça.
}