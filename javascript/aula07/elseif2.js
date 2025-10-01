let credencial = "PJ"

if (credencial == "Visitante") {
    console.log("Voce só pode ir onde seu anfitrião for.");
}
else if(credencial == "Estagiario"){
    console.log("Voce pode acessar as baias de trabalho e o refeitório.");
}
else if(credencial == "Aprendiz"){
    console.log("Voce pode acessar as áreas de lazer, baias de trabalho e refeitório");
}
else if(credencial == "CLT"){
    console.log("Voce pode acessar tudo, exeto a diretoria.");
}
else if(credencial == "CEO"){
    console.log("O céu é o limite");
}
else{
    console.log("Sua credencial é invalida, Acesso negado!!!");
}
