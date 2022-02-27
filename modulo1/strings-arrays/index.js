EXERCÍCIO DE FIXAÇÃO DE CÓDIGO

1. Indique todas as mensagens do console sem executar o programa

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

/* Eu não soube interpretar esses codigos */


2. Leia o código abaixo com atenção


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

/* O resultados impresso foi SUBI NUM ONIBUS EM MARROSO, todas as letras maiúsculas */



EXERCÍCIO DE ESCRITA DE CÓDIGO

1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

    const nomeDoUsuario = prompt ("Qual é o seu nome")
    const emailDoUsuario = prompt ("Qual é o seu email")

    const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda (o) ${nomeDoUsuario}`

    /* Fiz os programas no console dando valores às variaveis nomeDoUsuario e emailDoUsuario e o resultado foi:
    'O e-mail Taissa@gmail.com foi cadastrado com sucesso. Seja bem vinda (o) Taissa' */

