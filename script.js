const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

console.log(botoes)
function geraSenha(){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(numeroAleatorio);
}
function geraSenha(){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(letrasMaiusculas[numeroAleatorio]);
}
function geraSenha(){
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        console.log(letrasMaiusculas[numeroAleatorio]);
    }
}
function geraSenha(){
    let senha = '' ";
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        console.log(letrasMaiusculas[numeroAleatorio]);
    }
}
function geraSenha(){
    let senha = '' ”;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
}const checkbox = document.querySelectorAll('.checkbox');
campoSenha.value = senha;
function geraSenha(){
    let senha = '' ”;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}
