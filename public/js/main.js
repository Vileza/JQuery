var tempoInicial = $("#segundos").text();

  $(document).ready(function(){
    atualizaTamanhoFrase();
    campoTextoJogo();
    iniciaCronometro();
    verificadorDeTexto();
    $("#apagar").click(reiniciar);
    $(".botao-remover").click(removeLinhaTabela);
    removeLinhaTabela();

  });

function atualizaTamanhoFrase(){
  var frase = $(".frase").text();
  var numeroPalavras = frase.split(" ").length;
  var contagem = $("#numero-palavras");
  contagem.text(numeroPalavras);
}

function tempoInicialFrase(tempo){
  tempoInicial = tempo;
  $("#segundos").text(tempo);
}


var campoTexto = $(".campo-caractere");


function verificadorDeTexto(){
  campoTexto.on("input",  function(){
    var frase = $(".frase").text();
    var digitado = campoTexto.val();
    var comparavel = frase.substr(0, digitado.length);
    if(digitado == comparavel){
      campoTexto.addClass("digito-certo");
      campoTexto.removeClass("digito-errado");
    }else{
      campoTexto.addClass("digito-errado");
      campoTexto.removeClass("digito-certo");
    }
  });
}
//SELECIONA O CAMPO E CHAMA UMA FUNÇÃO AO DIGITAR QUALQUE LETRA PALAVRA
function campoTextoJogo(){
  campoTexto.on("input",function(){
    var campo = campoTexto.val();
//COM SPLIT FAZ O TRATAMENTO EM RELAÇÃO A ESPAÇOS DIGITADOS PARA NÃO CONTAR COMO PALAVRAS
    var qtdPalavras = campo.split(/\S+/).length -1;
    $("#palavra").text(qtdPalavras);
    var qtdLetras = campo.length;
    $("#letra").text(qtdLetras);

  });
}

function iniciaCronometro(){
  var campoTexto = $(".campo-caractere");
  campoTexto.one("focus", function(){
    var tempo = $("#segundos").text();
    var idtempo = setInterval(function(){
      tempo--;
      $("#segundos").text(tempo);
      if(tempo < 1){
        clearInterval(idtempo);
        finalizarJogo();
      }
    },1000);
  });
}

function finalizarJogo(){
  campoTexto.attr("readonly", true);
  campoTexto.toggleClass("campo-desativado");
  placarJogo();
}

function reiniciar(){
  campoTexto.attr("readonly", false);
  campoTexto.val("");
  $("#segundos").text(tempoInicial);
  $("#palavra").text("0");
  $("#letra").text("0");
  iniciaCronometro();
  campoTexto.toggleClass("campo-desativado");
  campoTexto.removeClass("digito-errado");
  campoTexto.removeClass("digito-certo");
}
