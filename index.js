//   Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"
var Personagem = "sanches"

var XpDoHeroi = 9000;

var NivelDoHeroi;

if (XpDoHeroi<= 1000){
  NivelDoHeroi= "ferro";
}
  else if (XpDoHeroi>= 1001 && XpDoHeroi <= 3000){
    NivelDoHeroi = "bronze"
  }

  else if (XpDoHeroi>=3001 && XpDoHeroi <=5000){
    NivelDoHeroi = "prata"
  }

  else if(XpDoHeroi>=5001 && XpDoHeroi <=7000 ){
    NivelDoHeroi = "ouro"
  }
  else if (XpDoHeroi>= 7001 && XpDoHeroi <= 8000){
    NivelDoHeroi = "platina"
  }

  else if (XpDoHeroi>=8001 && XpDoHeroi <=9000){
    NivelDoHeroi = "diamante"
  }

  else if(XpDoHeroi>=9001 && XpDoHeroi <=10000 ){
    NivelDoHeroi = "mestre"
  }
  else{
    NivelDoHeroi = "desafiante"
  }




console.log( "O heroi " + Personagem + " com o Xp " + XpDoHeroi + " está no rank " + NivelDoHeroi )


