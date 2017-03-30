// import words from './datarudy.js';
var data = require('./datarudy');
const letters =  "ABCDEFGHIJKLMNOPQRSTUVWYZ";

class BoogleBoard {
  constructor (){
    this._board = [];
    this._dimension = 0;
    this._result = [];
  }

  shake(dimension) {

    // for (let i = 0 ; i < (dimension * dimension) ; i++) {
    //   // populate random letters
    //   this._board.push(this.randomLetter());
    // }

    this._board = ["A","S","S","K","R","U","N","N","M","P","R","A","B","E","R","Y"]
    this._dimension = dimension;
  }

  randomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
  }

  printBoard() {
    let board = "";
    for (let i = 0 ; i < this._dimension ; i++) {
      for (let j = 0 ; j < this._dimension ; j++) {
        board += this._board[i+j] + " ";
      }
      board += "\n";
    }

    console.log(board);
  }

  solve() {
    //?
    // get word from data.words
    // find word in board array
    console.log(data.words);


    for (let i = 0 ; i < data.words.length ; i++) {
      // find the letters in the board
      // if found, start searching from that position
      console.log(data.words[i]);
      let temp = data.words[i].split('');
      let found_index = [];
      for (let j = 0 ; j < this._board.length ; j++) {
        // search in the board
        if (temp[0] == this._board[j]) {
          // found the index of first letter of the word
          found_index.push(j);
        }

      }

      console.log(`found_index = ${found_index}`);

      // search starting from the found_index
      if(found_index.length > 0) {
        let x = 0;
        let word_index = 1;
        let cur = 0;
        while (1) {
          let start = found_index[x];

          // check up right
          let move = start - (this._dimention + 1);
          if ( move >= 0 && this._board[move] == temp[word_index]) {
            cur = move;

          }

          // check up

          // check up right

          // check right

          // check down right

          // check down

          // check down left

          // check left

        }

      }


    }

  }
}


let boogle = new BoogleBoard();

boogle.shake(4);
boogle.printBoard();

boogle.solve();
