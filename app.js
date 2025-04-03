alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 3) + 1;
console.log(numeroSecreto);
let chute = null;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas  = tentativas + 1;
        tentativas++;

    }
}

//OPERADOR TERNÁRIO - Interrogação funciona como "Caso". O que for colocado na sequência será realizado caso tentativas seja maior do que um. Nesse caso, se tentativas for maior do que um, será utilizada a palavra "tentativas" (plural). Se tentativas não maior que um, usar dois-pontos (:) e utilizar a palavra "tentativa" (singular). 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*if (tentativas > 1){
   
}else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/