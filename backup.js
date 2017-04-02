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

  search(){


    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {




        if ((new Date().getTime() - start) > milliseconds) {
          break;
        }

      }
    }
    console.log(this.board);
    let binary_search = (searchElement) =>{
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
// console.log(binary_search('services',this.data));
    function traceRoute(x,y,arr){
      for(let i=0;i<arr.length;i++){
        if(arr[i].x==x&&arr[i].y){
          return false;
        }
      }
      return true;
    }


    function searchword(arrBoard,indexX,indexY,word='',temp=[],arrSave=[]){

      if(indexX>=0&&indexY>=0&&indexX<=arrBoard.length-1&&indexY<=arrBoard.length-1){
        word=word+arrBoard[indexX][indexY];
        console.log(word);
        if(binary_search(word)){

          temp.push(word);
          console.log(temp);
          return temp;

        }

        arrSave.push({x:indexX,y:indexY});
        console.log(arrSave);
        sleep(100);
          //TINGGAL TAMBAHIN ARAHNYA
          console.log('trace 1 :'+traceRoute(indexX+1,indexY,arrSave));
          if(traceRoute(indexX+1,indexY,arrSave)){
            searchword(arrBoard,indexX+1,indexY,word,temp,arrSave);
          }
          console.log('trace 2 :'+traceRoute(indexX,indexY+1,arrSave));
          if(traceRoute(indexX,indexY+1,arrSave)){
            searchword(arrBoard,indexX,indexY+1,word,temp,arrSave);
          }
          console.log('trace 3 :'+traceRoute(indexX+1,indexY+1,arrSave));;
          if(traceRoute(indexX+1,indexY+1,arrSave)){
            searchword(arrBoard,indexX+1,indexY+1,word,temp,arrSave);
          }
          console.log('trace 4 :'+traceRoute(indexX-1,indexY,arrSave));;
          if(traceRoute(indexX-1,indexY,arrSave)){
            searchword(arrBoard,indexX-1,indexY,word,temp,arrSave);
          }
          console.log('trace 5 :'+traceRoute(indexX-1,indexY-1,arrSave));;
          if(traceRoute(indexX-1,indexY-1,arrSave)){
            searchword(arrBoard,indexX-1,indexY-1,word,temp,arrSave);
          }
          console.log('trace 5 :'+traceRoute(indexX,indexY-1,arrSave));;
          if(traceRoute(indexX,indexY-1,arrSave)){
            searchword(arrBoard,indexX-1,indexY-1,word,temp,arrSave);
          }


      }else{
        // temp.push(word);
        // console.log(temp);
        // return temp;

        arrSave.splice(0, arrSave.length);
        // console.log(arrSave);

      }
      arrSave.splice(0, arrSave.length);

    }

    searchword(this.board,0,0);

  }

}

let Boogle1 =new Boogle();


//Boogle1.shake(5);
Boogle1.search();
