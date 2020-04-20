'use strict';

{
  class CardGame {

    constructor() {
      this.deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
      this.player1Hand = null;
      this.player2Hand = null;
    }

    show() {
      document.getElementById('deck_num').textContent = this.deck.length + "枚"
      document.getElementById('player1_hand').textContent = "[" + this.player1Hand + "]"
      document.getElementById('player2_hand').textContent = "[" + this.player2Hand + "]"
    }

    shuffle() {
      for (let i = this.deck.length - 1; i >= 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
    }

    deal() {
      this.player1Hand = this.deck.shift();
      this.player2Hand = this.deck.shift();
    }

    buttonAdd() {
      const btnadd = document.createElement('button');
      btnadd.classList.add('get_card');
      btnadd.textContent = "カードを山札から取る"
      document.getElementsByClassName('action_area')[0].appendChild(btnadd);
    }
  }

  const game = new CardGame();

  document.getElementById('start_button').addEventListener('click', () => {
    game.shuffle();
    game.deal();
    game.show();
    document.getElementById('start_button').style.display = "none";
    game.buttonAdd();
  });
}