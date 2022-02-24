EXERCÍCIO DE I9NTERPRETAÇÃO DE CÓDIGO

1. Leia o código abaixo

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) O que vai ser impresso no console?

/*Matheus Nachtergale
Virginia Cavendish
Globo, 14h*/

_________________________________________________________//______________________________________________________




2. Leia o código abaixo:

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)


a) O que vai ser impresso no console?

/*nome: 'Juca', idade: 3, raca: 'SRD'
nome: 'Juba', idade: 3, raca: 'SRD'
nome: 'Jubo', idade: 3, raca: 'SRD' */



b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

/*Realiza uma cópia do objeto  inteiro para podemos editá-lo da maneira que quisermos */

_______________________________________________________//__________________________________________________________





3. Leia o código abaixo:


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))


a) O que vai ser impresso no console?

/*False
undefined */


b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

/* Aparaceu "False" por que a chave BACKENDER continha o valor FALSE.

Apareceu UNDEFINED por que nao foi criada a chave "altura" e nem atribuido valor à ela.*/

_________________________________________________________//_________________________________________________


EXERCÍCIO DE ESCRITA DE CÓDIGO

    1. Resolva os passos a seguir:

    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos).
    Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

    const pessoa = {
        nome: "Taissa",
        apelidos: ["Issa", "Tai", "Tatá"]
    }
    function meusDados(pessoa)
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)

    /*RESPOSTA DO CONSOLE: Eu sou Taissa, mas pode me chamar de Issa, Tai ou Tatá. */





    b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
    Depois, chame a função feita no item anterior passando como argumento o novo objeto

    const novaPessoa = {
        ...pessoa,
        nome: "Taissa",
        apelidos: ["Isa", "Tissa", "Tatai"]
    }

    console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}.`)

    /*RESPOSTA DO CONSOLE: Eu sou Taissa, mas pode me chamar de Isa, Tissa ou Tatai. */





    2.Resolva os passos a seguir:

    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

    1. O valor de nome
    2. O numero de caracteres do valor nome
    3. O valor de idade
    4. O valor de profissão
    5. O numero de caracteres do valor profissão



    const pessoa = {
        nome: "Bruno",
        idade: 23,
        profissao: "Instrutor"
    }

    const pessoa2 = {
        nome: "Taissa",
        idade: 36,
        profissao: "Programadora"
    }

    function minhaFuncao (pessoa) {
        const resultado = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
        return resultado
    }

    function minhaFuncao (pessoa2) {
        const resultado = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
        return resultado
    }

    console.log(minhaFuncao(pessoa)) /* RESPOSTA DO CONSOLE: ['Bruno', 5, 23, 'Instrutor', 9] */


    console.log(minhaFuncao(pessoa2)) /*RESPOSTA DO CONSOLE: ['Taissa', 6, 36, 'Programadora', 12] */







    3. Resolva os passos a seguir: 

    a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

    b) Crie três novos objetos que representem frutas de um sacolão.
    Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

    c)  Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho.
    Invoque essa função passando os três objetos criados.

    d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.



    const carrinho = []
    const fruta1 = {
        Nome:"banana",
        disponibilidade: true
    }

    const fruta2 = {
        Nome:"abacaxi",
        disponibilidade: true
    }

    const fruta3 = {
        Nome:"morango",
        disponibilidade: true
    }

    function addFruta(fruta){
        const carrinhoArray = carrinho.push(fruta)
    }

    addFruta(fruta1)
    addFruta(fruta2)
    assFruta(fruta3)

    console.log(carrinho)

    /* COMO MOSTRADO NO ENUNCIADO DA QUESTÃO, APARECEU (3) [{…}, {…}, {…}] COM A SETA REVELANDO OS INTENS INCLUIDOS:
    0: {Nome: 'banana', disponibilidade: true}
    1: {Nome: 'abacaxi', disponibilidade: true}
    2: {Nome: 'morango', disponibilidade: true} */
    







