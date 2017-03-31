'use strict'
const fs = require('fs');
// const data = fs.readFileSync('data.js')

class Boogle {
  constructor(size) {
    this.size = size
    this.dict = fs.readFileSync('data.txt', 'utf8').split('\n')
    this.print = [ [ 'B', 'R', 'A', 'T', 'O' ],
                   [ 'I', 'G', 'Z', 'A', 'F' ],
                   [ 'I', 'N', 'C', 'D', 'T' ],
                   [ 'M', 'C', 'S', 'K', 'W' ],
                   [ 'L', 'Y', 'K', 'S', 'F' ]] // ini untuk cetak board di screen
    this.boggle = [ [ { letter: 'B', status: false },
    { letter: 'R', status: false },
    { letter: 'A', status: false },
    { letter: 'T', status: false },
    { letter: 'O', status: false } ],
  [ { letter: 'I', status: false },
    { letter: 'G', status: false },
    { letter: 'Z', status: false },
    { letter: 'A', status: false },
    { letter: 'F', status: false } ],
  [ { letter: 'I', status: false },
    { letter: 'N', status: false },
    { letter: 'C', status: false },
    { letter: 'D', status: false },
    { letter: 'T', status: false } ],
  [ { letter: 'M', status: false },
    { letter: 'C', status: false },
    { letter: 'S', status: false },
    { letter: 'K', status: false },
    { letter: 'W', status: false } ],
  [ { letter: 'L', status: false },
    { letter: 'Y', status: false },
    { letter: 'K', status: false },
    { letter: 'S', status: false },
    { letter: 'F', status: false } ]] // outputnya array of object
    this.hasil = []
    /*

    [ [ 'B', 'R', 'A', 'T', 'O' ],
      [ 'I', 'G', 'Z', 'A', 'F' ],
      [ 'I', 'N', 'C', 'D', 'T' ],
      [ 'M', 'C', 'S', 'K', 'W' ],
      [ 'L', 'Y', 'K', 'S', 'F' ]
    ]
  */

  }

  begin(){
    // let arr = []
    // for (let i=0; i<this.size; i++){
    //   let status = []
    //   let print = []
    //   for (let z=0; z<this.size; z++){
    //     let obj = {}
    //     let getLetter = String.fromCharCode(this.random())
    //     obj.letter = getLetter
    //     obj.status = false
    //     status.push(obj)
    //     print.push(getLetter)
    //   }
    //   this.boggle.push(status)
    //   this.print.push(print)
    // }
    // console.log(this.status);
    // console.log(this.print);
  }

  random(){
    return Math.floor((Math.random() * (90 - 65 + 1)) + 65)
  }

  solve(){
    for (let i = 0; i < this.dict.length; i++) {
      // console.log(this.hasil);
      // console.log(this.dict[i]);
      if(this.checkWord(this.dict[i])){
        this.hasil.push(this.dict[i])
        // console.log(`ada`);
      }
    }
    console.log(`${this.hasil.length} Found Words!!!`)
    // if(this.checkWord(this.dict[0])){
    //   console.log(`ada`);
    // } else {
    //   console.log(`not found`);
    // }

    // for(let i=0; i<this.hasil.length; i++){
    //   console.log(`[${this.hasil[i]}]`);
    // }
  }

  checkWord(word){
    // console.log(this.boggle.length);
    for (let i=0; i<this.boggle.length; i++){ //row
      for (let j=0; j<this.boggle.length; j++){ //coloumn
        if(word[0] == this.boggle[i][j].letter){
          if(this.nextWord(word.slice(1),i,j,this.boggle)){
            return true
          }
        }
      }
    }
    return false
  }

  nextWord(word,row,col,boggle,result=[]){ //0,2
    if (word.length == 0){
      result.push(true)
    } else {
      boggle[row][col].status = true
      let round = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
      // check word selanjutnya
      for (let i=0; i<round.length; i++){
        let maxBoard = boggle.length - 1 //4
        if(row+round[i][0] >= 0 && row+round[i][0] <= maxBoard ){
          if(col+round[i][1] >= 0 && col+round[i][1] <= maxBoard){
            //check huruf lagi row  col
            let nextPos = [row+round[i][0], col+round[i][1]]
            if(word[0] == boggle[nextPos[0]][nextPos[1]].letter && boggle[nextPos[0]][nextPos[1]].status != true){
              // console.log(word.slice(1).length);
              this.nextWord(word.slice(1),nextPos[0],nextPos[1],boggle,result)
            }
          }
        }
      }
    }
    // console.log(result.length);
    // return true
    if(result.length != 0){
      // console.log(`masuk`);
      return true
    }
    else {
      return false
    }
  }

}

let play = new Boogle(5)
// console.log(play.dict);
// console.log(play.status);
console.log(play.print);

// play.begin()
play.solve()
// console.log(data);

// String.fromCharCode(65)
