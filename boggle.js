// var sys = require('sys');
const fs = require('fs');

class BoggleBoard {
  constructor(size) {
    this.size = size;
    this.board = [];

    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabet = alph.split("");

    this.words = [];

    this.tracedString = "";
    this.tracedMove = [];
  }

  shake() {
    for (let i = 0; i < this.size; i++) {
      let fill =[];
      for (let j = 0; j < this.size; j++) {
        let letter = this.alphabet[Math.floor(Math.random()*this.alphabet.length)];
        fill.push(letter);
      }
      this.board.push(fill);
    }
    return this.board;
  }

  import_words(filename) {
    let data = fs.readFileSync(filename).toString();
    let arrayPattern = /[A-Z]+/g;
    let words = data.match(arrayPattern);
    this.words = words;
  }

  possible_moves(row, col) {
    let posMov = [];
    let posMovCol = [];
    let posMovRow = [];

    posMovCol.push(col);
    posMovRow.push(row);

    if (col - 1 >= 0) {
      posMovCol.push(col - 1);
    }
    if (col + 1 < this.size) {
      posMovCol.push(col + 1);
    }
    if (row - 1 >= 0) {
      posMovRow.push(row - 1);
    }
    if (row + 1 < this.size) {
      posMovRow.push(row + 1);
    }

    for (let i = 0; i < posMovCol.length; i++) {
      for (let j = 0; j < posMovRow.length; j++) {
        posMov.push([posMovCol[i],posMovRow[j]]);
        if (posMovCol[i] === col && posMovRow[j] === row) {
          posMov.shift();
        }
      }
    }

    return posMov;
  }

  trace_move(row, col) {
    this.tracedMove.push([row,col]);
    return this.board[row][col];
  }

  trace_letters(letter) {
    this.tracedString += letter;
  }

  reset_tracing() {
    this.tracedString = "";
    this.tracedMove = [];
  }

  possible_words(string) {
    let words = [];
    let pattern = new RegExp(string);
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].indexOf(string) === 0) {
        words.push(this.words[i]);
      }
    }
    return words;
  }

}

let boggle = new BoggleBoard(4);
boggle.import_words("data.js");
boggle.shake();
console.log(boggle.board);
boggle.trace_letters(boggle.trace_move(0,0));
boggle.trace_letters(boggle.trace_move(1,0));
boggle.trace_letters(boggle.trace_move(1,1));
boggle.trace_letters(boggle.trace_move(1,2));
console.log(boggle.tracedMove);
console.log(boggle.tracedString);
console.log(boggle.possible_words(boggle.tracedString));
