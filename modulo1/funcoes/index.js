Exercícios de interpretação de código

1. Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

/*10 e 50*/



b) O que aconteceria se retirasse os dois console.log e simplesmente
invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

/*Continuaria imprimindo 10 e 50*/
	
	

2. Leia o código abaixo

x;

const outraFuncao = function(texto) {
		return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
   
a. Explique o que essa função faz e qual é sua utilidade

/*Função toLowerCase deixa o texto com todas as letras minúsculas e a função includes verifica se array contem um determinado elemento*/



b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` /*Retornou true para palavra cenoura*/
     ii.  `CENOURA é bom pra vista` /* cenoura é bom pra vista*/
     iii. `Cenouras crescem na terra`  /*Retornou false para palavra cenouras*/










     EXERCÍCIO DE ESCRITA DE CÓDIGO

     1. Escreva as funções  explicadas abaixo:

     a) A função não deve receber nenhum parametro e deve imprimir uma mensagem falando
     algumas informações sobre você, como:

     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

     /*const frase = "Eu sou Taissa, tenho 36 anos, moro no Rio de janeiro e sou estudante." */

     /*Infelizmente eu vou ter que parar o exercício por aqui. O curso inicia às 08 horas da manhã mas minha rotina
     começa às 05. Vou enviar o PR para não ficar pendente, mas no fim de semana acredito que poderei revisar esse conteúdo */
