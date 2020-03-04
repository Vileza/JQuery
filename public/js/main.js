var tempoInicial = $("#segundos").text();

  $(document).ready(function(){
    atualizaTamanhoFrase();
    campoTextoJogo();
    iniciaCronometro();
    verificadorDeTexto();
    $("#apagar").click(reiniciar);
    removeLinhaTabela();

  });

function atualizaTamanhoFrase(){
  var frase = $(".frase").text();
  var numeroPalavras = frase.split(" ").length;
  var contagem = $("#numero-palavras");
  contagem.text(numeroPalavras);
}

var campoTexto = $(".campo-caractere");

var frase = $(".frase").text();
function verificadorDeTexto(){
  campoTexto.on("input",  function(){
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
  var tempo = $("#segundos").text();
  campoTexto.one("focus", function(){
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

function placarJogo(){
  var corpoTabela = $(".placar").find("tbody");
  var nomeJogador = "David";
  var placarPalavras = $("#palavra").text();
  console.log(placarPalavras);
  var linha = "<tr>"+
                  "<td>"+ nomeJogador + "</td>"+
                  "<td>"+ placarPalavras + "</td>"+
              "<tr>";
  corpoTabela.prepend(linha);

}

function removeLinhaTabela(){
  $(".botao-remover").click(function(){
    $(this).parent().parent().remove();
  });
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
