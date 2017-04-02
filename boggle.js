"use strict"
const fs = require('fs');

class Boogle {
  constructor() {
    this.data = (fs.readFileSync('data.js').toString().split("\n")).sort();
    this.board=[];
    this.char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    this.wordHasil=[];
  }



  shake(num){

//generate board
    let boggle =[];
    let size=num*num;
    let index=0;
    for(let i=0;i<size;i++){
      index =Math.floor((Math.random() * 26));
      boggle.push(this.char[index]);
    }
    for(let i = 0;i <=size-(num-1) ;i=i+num ){
      this.board.push(boggle.slice(i,(i+num)));
    }
  }

  traceRoute(x,y,arr){
    for(let i=0;i<arr.length;i++){
      if(arr[i].x==x&&arr[i].y){
        return false;
      }
    }
    return true;
  }

  binary_search (searchElement){
    var minIndex = 0;
      var maxIndex = this.data.length - 1;
      var currentIndex;
      var currentElement;

      while (minIndex <= maxIndex) {
          currentIndex = Math.floor((minIndex + maxIndex) / 2);
          currentElement = this.data[currentIndex];

          if (currentElement < searchElement) {
              minIndex = currentIndex + 1;
          }
          else if (currentElement > searchElement) {
              maxIndex = currentIndex - 1;
          }
          else {
              return true;
          }
      }

      return false;
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }

    }
  }

  searchword(arrBoard,row,col,checkTable,word=''){

    if(row<0||col<0||row>=arrBoard.length||col>=arrBoard.length){

      return;
    }

    // console.log(checkTable);
    // console.log(arrBoard);
    if(checkTable[row][col]=='true'){
    return;
    }

    word=word+arrBoard[row][col];



    // console.log(row+' '+col);

    checkTable[row][col] ='true';
    // console.log(checkTable);

    if(this.binary_search(word)){

      this.wordHasil.push(word);
      // console.log(this.wordHasil);


    }

    // console.log('start');
    for(let i=-1;i<=1;i++){
      for(let j=-1;j<=1;j++){
        // console.log(row+' '+col)
        this.searchword(arrBoard,row + i, col + j,checkTable,word);

      }
    }

    // console.log('end');
    word='';
    checkTable[row][col]='false';


    // let testArr=this.copyArr();

  }

  createFalse(){
    let tempF=[];
    let temp = [];
    for(let j=0;j<this.board.length;j++){
      for(let i=0;i<this.board.length;i++){

        tempF.push('false');

      }

    }

    for(let k = 0;k <=(this.board.length*this.board.length)-(this.board.length-1) ;k=k+this.board.length ){
      temp.push(tempF.slice(k,(k+this.board.length)));
    }


    return temp;
  }

  search(){







    console.log(this.board);

    for(let i=0;i<this.board.length;i++){
      for(let j=0;j<this.board.length;j++){
        let testArr=this.createFalse();
        this.searchword(this.board,i,j,testArr);
      }
    }

    console.log(this.wordHasil);




  }

}

let Boogle1 =new Boogle();


Boogle1.shake(4);
Boogle1.search();
