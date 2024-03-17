"use strict";
function calculaValores(a, b) {
    console.log("Executando calculo de valores a x b");
    console.log("Finalizando calculo de valores a x b");
    return a * b;
}
const resultado = calculaValores(10, 20);
console.log("A multiplicação dos números é : ");
console.log(resultado);
function Saudacao(nome, diz) {
    nome = nome;
    diz = diz;
    return (`${nome}` + `${diz}`);
}
const pessoaJoao = Saudacao("João Ferramenta", " Diz: Olá! ");
console.log(pessoaJoao + "Quero um PIX de " + resultado + ". Mas como programador ganharei muito mais!");
