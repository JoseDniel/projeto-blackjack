/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    let usuario = {
      cartas: []
   
   }
   let computador = {
      cartas: []
   }
   
   //condicional para o jogo funcionar através de confirmação
   if (confirm("Seja bem-vindo(a).\nQuer iniciar uma nova rodada?")) {
   
   //cria uma variavel booleana para ser a condição do while de distruição de cartas iniciais
      let distribuir = true;
   //enquanto a booleana não for trocada para false, repete a operação
      while (distribuir) {
         //adiciona duas cartas para cada jogador
         usuario.cartas.push(comprarCarta())
         usuario.cartas.push(comprarCarta())
         computador.cartas.push(comprarCarta())
         computador.cartas.push(comprarCarta())
            //condicional para garantir que os jogadores não saiam com dois As na distribuição de cartas inicial
            //caso saia, as cartas o array de cartas inicial é desfeito e re-sorteado.
            if ((usuario.cartas[0].valor === 11 && usuario.cartas[1].valor === 11) 
               || (computador.cartas[0].valor===  11 && computador.cartas[1].valor === 11)) {
                  usuario.cartas = []
                  computador.cartas = []
                  distribuir = true
            //caso tudo ocorra bem com a distribuição, define a variavel como false para sair do loop while.
            }else {
               distribuir = false
            }
      }
   
   //adiciona aos objetos players duas novas propriedades a partir da primeira propriedade `cartas` individualizando seu texto e seu valor em propriedades separadas
      usuario.pontos = (usuario.cartas[0].valor + usuario.cartas[1].valor)
      usuario.texto = (usuario.cartas[0].texto+ " " + usuario.cartas[1].texto + " ")
      computador.pontos = (computador.cartas[0].valor + computador.cartas[1].valor)
      computador.texto = (computador.cartas[0].texto+" "+computador.cartas[1].texto + " ")
   
      //criado uma variavel booleana para ser a condição do while
      let comprar = true
      //entra no loop while, enquanto a pontuação do jogador estiver abaixo de 21, sugere uma compra de carta, vinculado a variavel comprar ainda estar definida como true
      //ou seja, que o usuario ainda tem a opção de comprar, caso negue a compra, redefine os valores de comprar pra false para dar seguimento ao turno do computador.
      while(usuario.pontos < 21 && comprar === true){
         if(confirm(`Suas cartas são ${usuario.texto}, a carta revelada do seu adversário é ${computador.cartas[0].texto}.\nDeseja comprar outra carta?`)){
            usuario.cartas.push(comprarCarta())
            usuario.pontos += usuario.cartas[usuario.cartas.length-1].valor
            usuario.texto += usuario.cartas[usuario.cartas.length-1].texto + " "
         }else{
            comprar = false
         }
      }
   
   //enquanto a variavel comprar estiver como false no turno do computador, confere se a pontuação do mesmo é menor que 21 e menor que os pontos do usúario
   //para que o computador também compre cartas, caso contrário ele não realiza a compra de cartas, passando para a parte dos resultados.
       while(!comprar){
            if(computador.pontos < 21 && computador.pontos < usuario.pontos){
            computador.cartas.push(comprarCarta())
            computador.pontos += computador.cartas[computador.cartas.length-1].valor
            computador.texto += computador.cartas[computador.cartas.length-1].texto + " "
            }else{
               comprar = true
            }
         }
   
   //definição através de condicionais para as situações de ganhos e perdas.
      if(usuario.pontos === 21){
         alert(`Usúario - Cartas: ${usuario.texto} - Pontuação: ${usuario.pontos}.\nComputador - Cartas: ${computador.texto} - Pontuação: ${computador.pontos}.\n\nO usúario ganhou.`)
      }else if(usuario.pontos > computador.pontos && usuario.pontos <= 21){
         alert(`Usúario - Cartas: ${usuario.texto} - Pontuação: ${usuario.pontos}.\nComputador - Cartas: ${computador.texto} - Pontuação: ${computador.pontos}.\n\nO usúario ganhou.`)
      }else if(computador.pontos > usuario.pontos && computador.pontos <= 21){
         alert(`Usúario - Cartas: ${usuario.texto} - Pontuação: ${usuario.pontos}.\nComputador- Cartas: ${computador.texto} - Pontuação: ${computador.pontos}.\n\nO usúario perdeu.`)
      }else if(usuario.pontos <= 21 && computador.pontos > 21){
         alert(`Usúario - Cartas: ${usuario.texto} - Pontuação: ${usuario.pontos}.\nComputador - Cartas: ${computador.texto} - Pontuação: ${computador.pontos}.\n\nO usúario ganhou.`)
      }else if(computador.pontos <= 21 && usuario.pontos > 21){
         alert(`Usúario - Cartas: ${usuario.texto} - Pontuação: ${usuario.pontos}.\nComputador - Cartas: ${computador.texto} - Pontuação: ${computador.pontos}.\n\nO usúario perdeu.`)
      }else{
         alert(`Usúario - Cartas: ${usuario.texto} - Pontuação: ${usuario.pontos}.\nComputador - Cartas: ${computador.texto} - Pontuação: ${computador.pontos}.\n\nEmpate.`)
      }
   
   //após dados os resultados, pergunta se o jogador gostaria de jogar de novo, caso confirme, a página será recarregada para iniciar do 0.
   if(confirm("Jogar de novo?")){
      location.reload()
     }
   
   //caso o jogador recuse começar um novo jogo no carregamento da tela, encerra o programa. 
   }else{
      console.log("O jogo acabou.")
   }