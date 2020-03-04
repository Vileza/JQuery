

var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var contagem = $("#numero-palavras");
contagem.text(numeroPalavras);
