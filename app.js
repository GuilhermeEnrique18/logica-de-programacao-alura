alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
let chute = prompt('Escolha 1 número entre 1 e 10');

if (chute  == numeroSecreto) {
    alert(`acerto miseravi o numero foi: ${numeroSecreto}`);
} else{
    alert(`erro burro, era: ${numeroSecreto}`)
}