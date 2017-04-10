"use strict"
class Boggle {
  constructor(n) {
  this._boardSize   = n;
  this._boggleBoard = [[ 'H', 'O', 'O', 'N' ], [ 'B', 'V', 'C', 'K' ], [ 'A', 'A', 'I', 'T' ], [ 'T', 'E', 'U', 'R' ] ]
  // this._boggleBoard = this.cBoard();
  // this._dictionary  = this.impDictionary()
  this._dictionary  = ['HACKTIVATE','BACON','TRUE','HAVE','BACK','BOOK','NOOB','COOK','BAIT','CAVE','ACT','AVE','BAT','TIE','TEA','TIC','VET','KNOC','KNOCK']
  this._word        = '';
  this._huruf       = [];
  this._visited     = [];
  this._fail        = [];
  this._hurufStack  = [];
  }
  // impDictionary(){
  //   var fs = require('fs');
  //   var dictionaryBoard = fs.readFileSync('data.js').toString();
  //   dictionaryBoard=dictionaryBoard.split(',');
  //   return dictionaryBoard;
  // }
  cBoard(){
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      var bB = []
      for(let i=0;i<this._boardSize;i++){
        bB.push(Array());
        for(let j=0;j<this._boardSize;j++){
          let a = Math.round(Math.random()*25)
          bB[i].push(alphabet[a])
        }
      }
      return bB;
  }
  create(){
    for(let i=0;i<this._boardSize;i++){
      this._visited.push(Array());
      for(let j=0;j<this._boardSize;j++){
        this._visited[i].push(false);}
    }
    for(let i=0;i<this._boardSize;i++){
      this._fail.push(Array());
      for(let j=0;j<this._boardSize;j++){
        this._fail[i].push(false);}
    }
    return;
  }
  solve(dicIndex=0,index=0,a,b){
    this._word = this._dictionary[dicIndex];
    if(index == this._word.length) {
      // console.log("visited\n-------------------------------\n",this._visited)
      // console.log("hurufStack\n-------------------------------\n",this._hurufStack)
      console.log("initial\n-------------------------------\n",this._huruf)
      if(dicIndex < this._dictionary.length){
        console.log(`words found! ${this._hurufStack.join('')}\n=============================================`);
        this._hurufStack=[];
        this._huruf=[]
        dicIndex++;
        index=0;
        this.clearStatus();
        return this.solve(dicIndex,index,a,b);
      }
      else{return console.log(`words found! ${this._hurufStack.join('')}\n=============================================`);}
    }
    for(let i=0;i<this._boggleBoard.length;i++){
      for(let j=0;j<this._boggleBoard[i].length;j++){
        if(this._boggleBoard[i][j] == this._word[index]){
          if(this._huruf.length == 0){
            if (!this._visited[i][j]) {
              if(!this._fail[i][j]){
                this._visited[i][j] = true;
                this._huruf.push([i,j])
                this._hurufStack.push(this._boggleBoard[i][j])
                a = i
                b = j
                index++;
                return this.solve(dicIndex,index,a,b);
              }
            }
          }
          else{
            if(i==this._huruf[index-1][0] || i==this._huruf[index-1][0]-1 || i==this._huruf[index-1][0]+1){
              if(j==this._huruf[index-1][1] || j==this._huruf[index-1][1]-1 || j==this._huruf[index-1][1]+1){
                if (!this._visited[i][j]) {
                  if(!this._fail[i][j]){
                    this._visited[i][j] = true;
                    this._huruf.push([i,j])
                    this._hurufStack.push(this._boggleBoard[i][j])
                    a = i
                    b = j
                    index++;
                    return this.solve(dicIndex,index,a,b);
                  }
                }
              }
            }
          }
        }
      }
    }
    if(this._hurufStack.length !== this._word.length){
      if(this._huruf.length == 0){
        if(dicIndex == this._dictionary.length-1){
          return; console.log(`${this._dictionary[dicIndex]} not found!\n=============================================`)
        }
        console.log(`${this._dictionary[dicIndex]} not found!\n=============================================`);
        this._hurufStack=[];
        this._huruf=[]
        dicIndex++;
        index=0;
        this.clearStatus();
        return this.solve(dicIndex,index,0,0);
      }
      let a = this._huruf[this._huruf.length-1][0]
      let b = this._huruf[this._huruf.length-1][1]
      this._fail[a][b]=true;
      index = this._hurufStack.length-1
      this._huruf.pop();
      this._hurufStack.pop()
      return this.solve(dicIndex,index,a,b);
    }
  }
  clearStatus(){
    for(let i=0;i<this._boardSize;i++){
      for(let j=0;j<this._boardSize;j++){
        this._visited[i][j] = false;}
    }
    for(let i=0;i<this._boardSize;i++){
      for(let j=0;j<this._boardSize;j++){
        this._fail[i][j] = false;}
    }
  }
}
var boggle = new Boggle(4)
boggle.create();
boggle.solve()
