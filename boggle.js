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

    // random board
    // for (let i = 0 ; i < (dimension * dimension) ; i++) {
    //   // populate random letters
    //   this._board.push(this.randomLetter());
    // }

    // fixed board
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

      console.log(data.words[i]);
      let temp = data.words[i].split('');
      let found_index = [];

      // find the the first letter of word in the board
      for (let j = 0 ; j < this._board.length ; j++) {

        if (temp[0] == this._board[j]) {
          // save the index of the first letter
          found_index.push(j);
        }

      }

      console.log(`found_index = ${found_index}`);

      // search starting from the found_index
      if(found_index.length > 0) {
        // let x = 0;
        let wi = 1;
        let cur = 0;
        let history = [];
        let move = 0;
        for (let fi = 0 ; fi < found_index.length ; fi++) {
          cur = found_index[fi];
          let isFound = false;
          while (!isFound) {
            // check right
            // move cursor
            // check if cursor is valid position
            // check if cursor value is the same as word
            if ( (cur+1)%this._dimension > 0  && this._board[cur+1] == temp[wi] ) {
              console.log(`this._board[${cur+1}] = ${this._board[cur+1]}`);
              history.push(cur);
              cur = cur+1;
              wi++;
              console.log(`wi = ${wi}, temp.length = ${temp.length}`)
              if (wi == temp.length)
                isFound = true;

              console.log(`isFound = ${isFound}`);
            } // check left
            else if ( (cur%this._dimension)-1 >= 0 && this._board[cur-1] == temp[wi]) {
              history.push(cur);
              cur = cur-1;
              wi++;
              if (wi == temp.length)
                isFound = true;
            }
            else {
              break;
            }

            console.log(`current pos=${cur}`);
          } // end of  while

          if(isFound) {
            console.log(`---------------->found word: ${temp.join('')}`)
            this._result.push(temp.join(''));
          }


/*
          // check up left
          // let move = start - (this._dimension + 1);
          // if ( move >= 0 && this._board[move] == temp[word_index]) {
          let move = start - 5;
          if ( start%this._dimension > 0 && move >= 0 && this._board[move] == temp[word_index]) {
            history.push(move);
            cur = move;

            if(word_index < temp.length)
              word_index++;
          }

          // check up
          move = start - 4;
          if ( move >= 0 && this._board[move] == temp[word_index]) {
            history.push(move);
            cur = move;

            if(word_index < temp.length)
              word_index++;
          }

          // check up right


          // check down right

          // check down

          // check down left

          // check left
*/
        }// end of for position index


      }


    } // end of for main outer for
    return this._result;

  }

}


let boogle = new BoogleBoard();

boogle.shake(4);
boogle.printBoard();

console.log(boogle.solve());
