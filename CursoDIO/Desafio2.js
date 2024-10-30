/*Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)*/
let Ranking
let saldo = player(15, 2)
function player(Victories,Defeats){
    
   let saldo = Victories - Defeats 
   return saldo
   
}

switch (true) {
    case (saldo <= 10):
      Ranking = "Ferro";
      break;
    case (saldo >= 11 && saldo <= 20):
      Ranking = "Bronze";
      break;
    case (saldo >= 21 && saldo <= 50):
      Ranking = "Prata";
      break;
    case (saldo >= 51 && saldo <= 80):
      Ranking = "Ouro";
      break;
    case (saldo >= 81 && saldo <= 90):
      Ranking = "Diamante";
      break;
    case (saldo >= 91 && saldo <= 100):
      Ranking = "Lendário";
      break;
    case (saldo >= 101):
      Ranking = "Imortal";
      break;
    default:
      Ranking = "Sem classificação";
      break;
  }
console.log(`O Héroi tem de saldo de ${saldo} e está no nivel de ${Ranking}`)