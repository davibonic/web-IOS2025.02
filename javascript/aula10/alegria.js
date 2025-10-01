let login 
let loginCerto = "D"
let senhaCerta = "S"
let senha
//enquanto a senha que o usuario inserir for incorreta vamos pedir para q digite novamente

//do = faça e while = enquanto
// dowhile executa o código uma vez antes da comparação

do {
    login = prompt("Isira seu email:")
    senha = prompt("Isira sua senha:")
} while (login != loginCerto && senha != senhaCerta);
