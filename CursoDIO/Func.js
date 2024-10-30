
function olá(){
     console.log("Olá")
     
}
function nome(){
    console.log("Gabriel")
}
olá	() 
nome()

function pedido(numero, endereço){
    console.log("O pedido : " + numero)
    console.log("Será entregue no endereço : " + endereço)
}
pedido("115", "Rua pedro salvaterra")

let resultado = soma( 2, 2)
console.log("O resultado desta função é " + resultado)
function soma(numA, numB){
    let produto = numA + numB
    return produto 
}
// valor guaradado em uma variável para ser usado sempre que necessário

//exemplo de função com parametro e retorno abaixo :

let userName = getFirstName("Wolfgang-Amadeus-Mozart","-")

console.log("Seja bem vindo, " + userName )

userName = getFirstName("Alan Turing")
console.log("Seja bem vindo, " + userName)

function getFirstName(name, splitChar){ //parametro splitchar criado para atribuir valores na função built in (split) de acordo com o parametro 
    let firstName = name.split(splitChar)[0]
    return firstName
}
