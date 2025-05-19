let listaDeNumerosSoerteados =[]
let numeroLimete = 1500;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     responsiveVoice.speak(texto, "Brazilian Portuguese Female",{rate:1.0});
}
// usar esse codigo para falar responsiveVoice.speak(texto, "Brazilian Portuguese Female",{rate:1.0});


function exibirMensagemInicial(){
    exibirTextoNaTela("h1","jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um numero secreto entre 1 e 1500");
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;

    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas =`Você descobriu o número secreto!, com ${tentativas} ${palavraTentativa} :)`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto e menor");
        } else {
            exibirTextoNaTela("p", "O número secreto e maior");
        }
            
    } 
    tentativas++;
    limparCampo();

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimete + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSoerteados.length;

if (quantidadeDeElementosNaLista == numeroLimete){
    listaDeNumerosSoerteados = [];
}

    if (listaDeNumerosSoerteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSoerteados.push(numeroEscolhido)
        console.log(listaDeNumerosSoerteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}


























