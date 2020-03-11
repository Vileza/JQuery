$('#botao-troca-frase').click(fraseAleatoria);

function fraseAleatoria(){
  $("#spinner").toggle();
  $.get('http://localhost:3000/frases', mostrarFrase)

  // A função ' .fail ', será executado somente se a requisição falhar, ela faz parte da requisição ajax do tipo get ' $.get '
  // No caso abaixo irá fazer aparecer uma mensagem de erro, essa mensagem fica dentro uma tag 'p' com id 'erro'
  .fail(function(){
    $("#erro").show();
    setTimeout(function(){
        $("#erro").fadeOut(1000);
    },3000);
  })
  //A função ' .always ', é sempre chamada independente se a requisição ajax deu certo ou não, ou sejá, retornando ou não, tudo que estiver dentro será executado
  //' .always ' faz parte do '$.get' da requisição ajax do tipo get
  .always(function(){
    $("#spinner").toggle();
  });
}

function mostrarFrase(data){
  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.random() * data.length);
  frase.text(data[numeroAleatorio].texto);
  atualizaTamanhoFrase();
  tempoInicialFrase(data[numeroAleatorio].tempo);
}

function buscaFrase(){
  var frase = $(".frase");
  var fraseID = $(".#numero-frase");
  $.get('http://localhost:3000/frases',dados,trocaFrase);
}

function trocaFrase(data){
  console.log(data);
}
