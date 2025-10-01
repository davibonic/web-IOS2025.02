let doce = "cocada"
let usuario = "ket"
let precoDoce = 3.50

console.log(doce);
console.log(usuario);
console.log("Compra agora, é bom.");
console.log(doce + usuario);

console.log("Bom dia " + usuario + ", aproveite essa promoção incrivel, na compra de 3 unidades de " + doce + " e leve uma amostra gratis de sua preferencia!");
// quando quero conectar duas frases/strings, posso usar o sinal de + dentro de um log, lembre de dar espaço antes para nao ficar estranho

// o ato de conectar ou colar dados se chama concatenação
console.log(usuario + ": quero 3 " + doce + "s, por favor");
console.log("Claro " + usuario + ", Seu pedido deu: " + (precoDoce *3).toFixed (2) );  