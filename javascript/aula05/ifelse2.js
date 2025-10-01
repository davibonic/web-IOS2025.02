let idade = 16
let temDinheiro = false
let temCadUnico = false

// > maior que 
// >= maior ou igual a 
// < menor que 
// <= menor ou igual a 


if (idade >= 18){
    if(temDinheiro == true){
        console.log("Vamos dirigir um automovel");
    }
    else{
        if (temCadUnico == true) {
            console.log("CNH de graça");
        }
        else{
            console.log("Pobrinho e sem cadastro");
        }
    
    }

}
else{
    console.log("Muito novo, vai dirigir não");

}