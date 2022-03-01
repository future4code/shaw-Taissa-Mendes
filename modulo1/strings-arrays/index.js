EXERCÍCIO DE FIXAÇÃO DE CÓDIGO

1. Indique todas as mensagens do console sem executar o programa

let array
console.log('a. ', array)
/*Vai aparecer a. undefined*/

array = null
console.log('b. ', array)
/*b.  null*/

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
/*c.  11*/

let i = 0
console.log('d. ', array[i])
/*d.  3*/

array[i+1] = 19
console.log('e. ', array)
/*e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]*/

const valor = array[i+6]
console.log('f. ', valor)
/*f.  9*/


2. Leia o código abaixo com atenção


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

/* O resultados impresso foi SUBI NUM ONIBUS EM MIRROSO 27 todas as letras maiúsculas e o tamanho da frase (incluindo os espaços)*/



EXERCÍCIO DE ESCRITA DE CÓDIGO

1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

    const nomeDoUsuario = prompt ("Qual é o seu nome")
    const emailDoUsuario = prompt ("Qual é o seu email")

    const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda (o) ${nomeDoUsuario}`

    /* Fiz os programas no console dando valores às variaveis nomeDoUsuario e emailDoUsuario e o resultado foi:
    'O e-mail Taissa@gmail.com foi cadastrado com sucesso. Seja bem vinda (o) Taissa' */

