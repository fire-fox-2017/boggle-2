"use strict"
class boogle {
    constructor(){
      this.box = [];
      let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.word = [];
      this.shadow = "";
      this.step = [];
      this.match = [];
    }
shake(){

    let random = huruf.charAt(Math.floor(Math.random() * 26))
    for (let i = 0; i < 4; i++){
      this.box.push([])
      for (let j = 0; j < 4; j++){
      this.box[i].push(huruf.charAt(Math.floor(Math.random() * 26)))
    } }

    return this.box;
      }
    }

move(row,collumn){
  var posmove = [];
  for (var r = row -1; r < row + 1; r++){
    for (var c = collumn -1; c < collumn + 1; c++){
      if (r >= 0){
        posmove.push(r)
      }
      if (c >= 0){
        posmove.push(c)
      }
      console.log(posmove)
    }
  }
    for (var x = 0; x < posmove.length; x++){
      for (var y = 0; y < posmove.length; y++){
        if (posmove[x] === row && posmove[y] === collumn){
          posmove.shift();
        }
        else if (this.isInPrevMoves(this.step,posmove[x][y]) {
          posmove.shift();
      }
    }
    return posmove;
}
}

jejak(){
   this.step.push([row,collumn]);
   return this.step;
}

shadow(){
  this.shadow += letter;
  return this.shadow;
}

newword(){
  this.shadow = "";
  this.step = [];
  return this;
}

founded(previousMoves, possibleMove) {
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

possibleWords(string) {
   let words = [];
   let pattern = new RegExp(string);
   for (let i = 0; i < this.word.length; i++) {
     if (this.word[i].indexOf(string) === 0) {
       word.push(this.word[i]);
     }
   }
   return words;
 }

isInPrevMoves(previousMoves, possibleMove) {
 let found = 0;
 if (previousMoves.length > 0) {
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


solve(){
   }



 wordMatch() {
 let rawMatch = new Set(this.rawMatch);
 rawMatch.forEach((word) => {this.matchingWords.push(word)});
 this.matchingWords.sort();
 }

}


// Driver code
let boggle = new BoggleBoard(4);
let data = "data.js";
