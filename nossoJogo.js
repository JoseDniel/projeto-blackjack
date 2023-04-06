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
    if (confirm("Boas Vindas!!!\nDeseja jogar uma rodada de BlackJack?")) {
      let player = [],
        npc = [],
        cardsOk = false,
        playerScore = 0,
        npcScore = 0,
        playerText = "As suas cartas são:  ",
        npcText = "As cartas do computador são:  ";
      console.log("Boas vindas ao BlackJack!!!");
      while (!cardsOk) {
        // compras de cartas e verificação para que não haja um par de às na primeira mão.
        player.push(comprarCarta());
        player.push(comprarCarta());
        npc.push(comprarCarta());
        npc.push(comprarCarta());
        if (
          (player[0].valor === 11 && player[1].valor === 11) ||
          (npc[0].valor === 11 && npc[1].valor === 11)
        ) {
          player = [];
          npc = [];
        } else {
          cardsOk = true;
        }
      }
    
      for (let playerCards of player) {
        // logica para pegar as cartas do player
        playerText += playerCards.texto + " ";
        playerScore += playerCards.valor;
      }
    
      for (let npcCards of npc) {
        npcText += npcCards.texto + " ";
        npcScore += npcCards.valor;
      }
    
      console.log(
        `${playerText}valendo: ${playerScore}\n\n${npcText}valendo: ${npcScore}`
      );
    
      //logica para definir o vencedor da partida
      if (playerScore > npcScore) {
        console.log("Parabéns, você venceu!");
      } else if (playerScore < npcScore) {
        console.log("O computador venceu!");
      } else if (playerScore === npcScore) {
        console.log("Empate!");
      }
      console.log("Fim do jogo, obrigado pela participação.");
    } else {
      console.log("Fim ");
    }