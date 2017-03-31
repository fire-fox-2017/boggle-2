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

    this.matchingWords = [];
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

  importWords(filename) {
    let data = fs.readFileSync(filename).toString();
    let arrayPattern = /[A-Z]+/g;
    let words = data.match(arrayPattern);
    this.words = words;
  }

  possibleMoves(row, col) {
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
        } else if (this.isInPrevMoves(this.tracedMove, [posMovRow[i],posMovCol[j]])) {
          posMov.shift();
        }
      }
    }

    return posMov;
  }

  traceMove(row, col) {
    this.tracedMove.push([row,col]);
    // return this.board[row][col];
  }

  traceLetters(letter) {
    this.tracedString += letter;
    // return this.tracedString;
  }

  resetTracing() {
    this.tracedString = "";
    this.tracedMove = [];
  }

  possibleWords(string) {
    let words = [];
    let pattern = new RegExp(string);
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].indexOf(string) === 0) {
        words.push(this.words[i]);
      }
    }
    return words;
  }

  isInPrevMoves(previousMoves, possibleMove) {
    let found = 0;
    if (previousMoves > 0) {
      for (let i = 0; i < previousMoves.length; i++) {
        if (previousMoves[i][0] === possibleMove[0]) {
          if (previousMoves[i][1] === possibleMove[1]) {
            found += 1;
          }
        }
      }
    }

    if (found > 0) {
      return true;
    } else {
      return false;
    }
  }

  solver() {

    let test = (pos, tracedMove, tracedString) => {
      let updatedTrMov = tracedMove;
      updatedTrMov.push([pos[0],pos[1]]);
      let updatedTrStr = tracedString += this.board[pos[0]][pos[1]];
      let posMov = this.possibleMoves(pos[0],pos[1]);
      let posWords = this.possibleWords(updatedTrStr);
      // console.log(tracedMove);
      // console.log(posMov);
      // console.log(updatedTrStr);
      // console.log(posWords);


      if (posWords.length === 1) {
        let lastWord = posWords[0];
        if (lastWord === updatedTrStr) {
          // console.log(lastWord);
          // console.log(updatedTrMov);
          // console.log(updatedTrStr);
          this.matchingWords.push(lastWord);
          this.resetTracing();
        } else {
          this.resetTracing();
        }
      } else if (posWords.length > 1){
        for (let i = 0; i < posMov.length; i++) {
          return test(posMov[i], updatedTrMov, updatedTrStr);
        }
      }
    }

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.tracedMove.push([i][j]);
        this.tracedString += this.board[i][j];
        let posMovs = this.possibleMoves(i,j);
        console.log(posMovs);
        for (let k = 0; k < posMovs.length; k++) {
          test(posMovs[k], this.tracedMove, this.tracedString);
        }
      }
    }
  }


}

let boggle = new BoggleBoard(5);
boggle.importWords("data.js");
boggle.shake();
console.log(boggle.board);
boggle.solver();
console.log(boggle.matchingWords);
