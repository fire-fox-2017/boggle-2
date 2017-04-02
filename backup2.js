"use strict"
const fs = require('fs');

class Boogle {
  constructor() {
    this.data = (fs.readFileSync('data.js').toString().split("\n")).sort();
    this.board=[ [ 'a', 'h', 'n', 'l', 'i' ],
  [ 'f', 'p', 'x', 'a', 'v' ],
  [ 'z', 'r', 'k', 'd', 'n' ],
  [ 'k', 'h', 'z', 'a', 'i' ],
  [ 'd', 'i', 'w', 'b', 'u' ] ];
    this.char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    this.wordFound=[];
  }

   binary_search(searchElement){
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
    console.log(this.board);
  }

  traceRoute(x,y,arr){
    for(let i=0;i<arr.length;i++){
      if(arr[i].x==x&&arr[i].y){
        return false;
      }
    }
    return true;
  }

  createFalse(){
    let tempF=[];
    let temp = [];
    for(let j=0;j<this.board.length;j++){
      tempF.push('false');

    }

    for(let i=0;i<this.board.length;i++){

      temp.push(tempF);

    }
    return temp;
  }

  searchword(arrBoard,indexX,indexY,visit,word=''){

      visit[indexX][indexY]='true';


      word = word + arrBoard[indexX][indexY];

      if(this.binary_search(word)){
        this.wordFound.push(word);
      }

      for(let row=indexX;row<=indexX+1 && row<indexX;row++){
        for(let col=indexY;col<=indexY+1 && col<indexY;col++){
          console.log(row+' '+col)
          console.log(row>=0 && col>=0 && visit[row][col]=='false')
          if(row>=0 && col>=0 && visit[row][col]=='false'){
            this.searchword(arrBoard,row,col,visit,word);

          }

        }


      }

      word='';
      visit[indexX][indexY]='false';

  }

  search(){

    let falseArr = this.createFalse();
    // for(let i=0;i<this.board.length;i++){
    //   for(let j=0;j<this.board.length;i++){
    //     searchword(this.board,i,j,falseArr);
    //   }
    // }
    console.log(this.board);
    console.log(falseArr);
    console.log('wew '+falseArr[0][1]);
    this.searchword(this.board,0,0,falseArr);
    console.log(this.wordFound);






  }
}



let Boogle1 =new Boogle();


//Boogle1.shake(5);
Boogle1.search();
