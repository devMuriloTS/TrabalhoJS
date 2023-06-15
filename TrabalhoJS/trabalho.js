// Importando função para ler dados
const prompt = require("prompt-sync")({sigint: true});

// TRABALHO PARTE 1 

var aluno = {
    nome: "",
    sexo: "",
    nota: 0
}

aluno.sexo = prompt("Digite o sexo do aluno (F para Feminino, M para Masculino): ")
aluno.nome = prompt("Digite o nome do aluno: ")
aluno.nota = parseInt(prompt("Digite a nota do aluno: "))

if (aluno.nota >= 7 && aluno.sexo == "F"){
    console.log(`A senhorita ${aluno.nome} foi aprovada com a nota ${aluno.nota}!`);
}else if (aluno.nota >= 7 && aluno.sexo == "M"){
    console.log(`O senhor ${aluno.nome} foi aprovado com a nota ${aluno.nota}!`);
}else if (aluno.nota < 7 && aluno.sexo == "F"){
    console.log(`A senhorita ${aluno.nome} foi reprovada com a nota ${aluno.nota}.`)
}else if (aluno.nota < 7 && aluno.sexo == "M"){
    console.log(`O senhor ${aluno.nome} foi reprovado com a nota ${aluno.nota}.`)
}else {
    console.log(`Confira as informações do aluno e tente novamente.`)
}

// TRABALHO PARTE 2 -----------------------------------------------------------------

console.log("-----------------------------------")
console.log("SEGUNDA PARTE DO TRABALHO")
console.log("-----------------------------------")

var aluno = {
    nome: "",
    idade: 0,
    curso: "",
    nota: 0,
    snota: 0
}

aluno.nome = prompt("Digite o nome do aluno: ")
aluno.idade = parseFloat(prompt("Digite a idade do aluno: "))
aluno.nota = parseFloat(prompt("Digite a nota 1: "))
aluno.snota = parseFloat(prompt("Digite a nota 2: "))
console.log("----------------")
console.log("Cursos: info, adm, mec")
aluno.curso = prompt("Digite o curso do aluno:")
if (aluno.curso != "info" && aluno.curso != "adm" && aluno.curso != "mec"){
    console.log("Digite um curso válido!")
}
const media = (aluno.nota+aluno.snota)/2
if (aluno.curso == "info"){
    console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos, cursa Informática e suas notas foram:
    Nota 1: ${aluno.nota}
    Nota 2: ${aluno.snota}
    Media: ${media}`)
}
if (aluno.curso == "adm"){
    console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos, cursa Administração e suas notas foram:
    Nota 1: ${aluno.nota}
    Nota 2: ${aluno.snota}
    Media: ${media}`)
}
if (aluno.curso == "mec"){
    console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos, cursa Mecânica e suas notas foram:
    Nota 1: ${aluno.nota}
    Nota 2: ${aluno.snota}
    Media: ${media}
    `)
}
if (media >= 7){
    console.log("Aprovado!")
}
// TRABALHO PARTE 3 -----------------------------------------------------------------

console.log("-----------------------------------")
console.log("TERCEIRA PARTE DO TRABALHO")
console.log("-----------------------------------")

var cliente = {
    nome: "",
    receita: 4000.00,
    despesas: 3200.00
}

cliente.nome = prompt("Cliente, digite seu nome: ")

const saldo = cliente.receita - cliente.despesas

console.log(`O cliente ${cliente.nome} possui saldo de ${saldo}.`)


// Fiz coisa a mais, perdão se isso atrapalhou a correção, mas eu gostei muito dessa matéria!