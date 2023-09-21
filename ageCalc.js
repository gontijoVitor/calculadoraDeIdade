const prompt = require ('prompt-sync') ({sigint:true});

const nascimento = prompt("Digite o ano de seu nascimento: ")
var ano = new Date();
var anoPresente = ano.getFullYear();
var idade = anoPresente - nascimento;

console.log("Você tem " + idade + " anos")