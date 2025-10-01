let login = prompt("Isira seu email:")
let senha = prompt("Isira sua senha:")

let loginCerto = "D"
let senhaCerta = "S"

//Validar se o logine a senha estão certos
if (login == loginCerto && senha == senhaCerta) {
    alert("Credencial Validada")

    alert("Opção 1: Crédito \nOpção 2: Cossignado \nOpção 3: Emprestimo \nOpção 4: Renegociar \nOpção 0: Falar com atendente")

     let opcao = Number(prompt("Escolha a opção"))

    switch (opcao) {
        case 1:
            alert("Voce selecionou o Crédito. Redirecionando para o setor responsavel para prosseguir com o  ")
            break;
    
        case 2:
            alert("Voce selecionou o Cossignado. Redirecionando para o setor responsavel para anlisar as possibilidades.")
            break;

        case 3:
            alert("Voce selecionou o Emprestimo. Redirecionando para o setor responsavel para discutir os valores.")
            break;

        case 4:
            alert("Voce selecionou a opção de renegociar. Redirecionando para o setor responsavel.")
            break;

        case 0:
            alert("Voce selecionou a opção de falar com um atendente. Aguarde o atendimento.")
            break;


        default:
            alert("O Usuario não selecionou uma opção valida.")
            break;
    }


}    

// Se o login e/ou a senha forem incorretos, ele não pode fazer login
else{
    alert("Login ou senha incorretos")
}