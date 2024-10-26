let fruta = "uva"

switch (fruta){
    case "laranja" :
    console.log("suco de laranja")

    case "banana" :
        console.log("Vitamina de banana")
    //Condição verdadeira, entretanto a condição a seguir também 
    //sera executa.É necessário um break.
        break
    
    case "maça" :
        console.log("suco de maça")
    
    default:
    //Caso nenhum o input nao corresponda aos cases.
        console.log("Suco genérico")
}