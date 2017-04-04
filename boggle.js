const data = require('./data.js')

class BoggleBoard {

  constructor (size) {
    this.size = size;
    //this.board = this.shake(size);
    this.board = [['D','G','H','I'],
                  ['K','L','P','S'],
                  ['Y','E','U','T'],
                  ['E','O','R','N']];
    //this.dictionary = data.words;
    this.dictionary = ['APPLE', 'SIT', 'TRIP', 'TURN', 'SUPER'];
  }

  getRandomLetter () {
    let num = Math.floor(Math.random() * 26);
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letter[num];
  }

  shake (input) {
    let board = [];
    for (let i = 0; i < input; i++) {
      board.push([]);
      for (let j = 0; j < input; j++) {
        board[i].push(this.getRandomLetter());
      }
    }
    return board;
  }

  solve() {
    let arr = [];
    let word;
    for (let i = 0; i < this.dictionary.length; i++) {
      let temp = this.dictionary[i];
      for (let row=0; row<this.size; row++) {
        for (let col=0; col<this.size; col++) {
          // Check first letter of word from dictionary
          if (this.board[row][col] == temp[0]) {
            let word = this.checkWord(temp.slice(1), [row,col], [[row, col]], temp[0], temp)
            if (word === temp) {
              arr.push(word)
            }
          }
        }
      }
    }
    // console.log(arr)

    if (arr.length == 0) {
      console.log('tidak ada data ditemukan')
    }
    else{
      console.log(`${arr.length} words found :`)
      for (let j=0; j<arr.length; j++) {
        console.log(arr[j])
      }
    }

  }

  checkWord(word, currentIndex, reservedIndices, tempWord, originWord) {
    let final;
    if (word.length == 0) {
      return tempWord;
    }
    let area = [[-1,-1],[-1,0],[-1,1],
                 [0,-1],[0,1],
                 [1,-1],[1,0],[1,1]];
        for (let i=0; i<area.length; i++) {
          if (currentIndex[0]+area[i][0] >= 0 && currentIndex[0]+area[i][0]<this.size
            && currentIndex[1]+area[i][1] >= 0 && currentIndex[1]+area[i][1]<this.size && this.isReserved([currentIndex[0]+area[i][0], currentIndex[1]+area[i][1]], reservedIndices)==false) {
              let newrow = currentIndex[0]+area[i][0];
              let newcol = currentIndex[1]+area[i][1];
              if (this.board[newrow][newcol] == word[0]) {
                reservedIndices.push([newrow,newcol])


                let final = this.checkWord(word.slice(1), [newrow,newcol], reservedIndices, tempWord+word[0], originWord)
                if (final == originWord) {
                  return final;
                }
                else {
                  this.checkWord(word.slice(1), [newrow,newcol], reservedIndices, tempWord+word[0], originWord)
                }

              }
            }
        }
    return ''
  }

  // Checking if a letter at a position in the board has been used
  isReserved (index, reservedIndices) {
    for (let i = 0; i < reservedIndices.length; i++) {
      if (index[0] == reservedIndices[i][0] && index[1] == reservedIndices[i][1]) {
        return true;
      }
    }
    return false;
  }

}

let game = new BoggleBoard(4)
console.log(game.board);
game.solve()
