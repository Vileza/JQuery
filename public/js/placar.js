$('#botao-placar').click(animacaoPlacar);

function placarJogo(){
  var corpoTabela    = $(".placar").find("tbody");
  var usuario        = "David";
  var placarPalavras = $("#palavra").text();
  var linha          = adicionaLinha(usuario, placarPalavras);
  linha.find(".botao-remover").click(removeLinhaTabela);
  corpoTabela.prepend(linha);
  $('.placar').slideDown(400);
  scrollPlacar();
}

/**
 * [scrollPlacar description]
 * ESSA FUNCTION ATRIBUI A VAR 'POSICAO', O VALOR DA POSIÇÃO DA CLASS '.placar', NO HTML. ISSO É POSSÍVEL COM O '.offset()'
 * SEGUNDA LINHA SERÁ FEITA UMA ANIMAÇÃO DE DAR UM SCROLL PRA BAIXO DO HTML...
 * @return {[inteiro]} [posição em pixel da tabela que tem a class .placar];
 */
function scrollPlacar(){
  var posicao = $(".placar").offset().top;
  $("html").animate({
    scrollTop: posicao+"px"
  },1000);
}

function adicionaLinha(usuario, placarPalavras){
  var linha     = $('<tr>');
  var tdUsuario = $('<td>').text(usuario);
  var tdPlacar  = $('<td>').text(placarPalavras);
  var remover   = $('<td>');
  var link      = $('<a>').attr('href','#').addClass('botao-remover');
  var icone     = $('<i>').addClass('small').addClass('material-icons').text("delete");

  link.append(icone);
  remover.append(link);
  linha.append(tdUsuario);
  linha.append(tdPlacar);
  linha.append(remover);
  return linha;
}
function removeLinhaTabela(){
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);
    setTimeout(function(){
      linha.remove();
    },1000);
}

function animacaoPlacar(){
  $('.placar').stop().slideToggle(600);
}
