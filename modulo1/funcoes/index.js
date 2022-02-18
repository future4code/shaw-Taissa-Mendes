Exercícios de interpretação de código

1. Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

/*Nada. Todas as formas de rodar o codigo retornaram com erro */



b) O que aconteceria se retirasse os dois console.log e simplesmente
invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

/*Continuaria dando erro (pelo menos no meu console foi assim) */

2. Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
   
a. Explique o que essa função faz e qual é sua utilidade

/*Função toLowerCase deixa o texto com todas as letras minúsculas e a função includes inclui uma palavra no texto */



b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`










     EXERCÍCIO DE ESCRITA DE CÓDIGO

     1. Escreva as funções  explicadas abaixo:

     a) A função não deve receber nenhum parametro e deve imprimir uma mensagem falando
     algumas informações sobre você, como:

     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

     /*const frase = "Eu sou Taissa, tenho 36 anos, moro no Rio de janeiro e sou estudante." */

     /*Infelizmente eu vou ter que parar o exercício por aqui. O curso inicia às 08 horas da manhã mas minha rotina
     começa às 05. Vou enviar o PR para não ficar pendente, mas no fim de semana acredito que poderei revisar esse conteúdo */