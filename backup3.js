if(indexX>=0&&indexY>=0&&indexX<=arrBoard.length-1&&indexY<=arrBoard.length-1){
  word=word+arrBoard[indexX][indexY];
  console.log(word);
  if(this.binary_search(word)){

    this.wordHasil.push(word);
    console.log(this.wordHasil);


  }

  arrSave.push({x:indexX,y:indexY});

  this.sleep(100);

    console.log('trace 1 : '+this.traceRoute(indexX+1,indexY,arrSave));
    console.log('test masuk 1 : '+(indexX+1)+' '+indexY);
    if(this.traceRoute(indexX+1,indexY,arrSave)){
      console.log('masuk 1 : '+(indexX+1)+' '+indexY);
      this.searchword(arrBoard,indexX+1,indexY,word,arrSave);
    }
    console.log(arrSave);
    console.log('trace 2 :'+this.traceRoute(indexX,indexY+1,arrSave));
    console.log('test masuk 2 : '+indexX+' '+(indexY+1));
    if(this.traceRoute(indexX,indexY+1,arrSave)){
      console.log('masuk 2 : '+indexX+' '+(indexY+1));
      this.searchword(arrBoard,indexX,indexY+1,word,arrSave);
    }

    console.log('trace 3 :'+this.traceRoute(indexX+1,indexY+1,arrSave));
    console.log('test masuk 3 : '+(indexX+1)+' '+(indexY+1));
    if(this.traceRoute(indexX+1,indexY+1,arrSave)){
      console.log('masuk 3 : '+(indexX+1)+' '+(indexY+1));
      this.searchword(arrBoard,indexX+1,indexY+1,word,arrSave);
    }

    console.log('trace 4 :'+this.traceRoute(indexX-1,indexY,arrSave));
    console.log('test masuk 4 : '+(indexX-1)+' '+indexY);
    if(this.traceRoute(indexX-1,indexY,arrSave)){
      console.log('masuk 4 : '+(indexX-1)+' '+indexY);
      this.searchword(arrBoard,indexX-1,indexY,word,arrSave);
    }

    console.log('trace 5 :'+this.traceRoute(indexX-1,indexY-1,arrSave));
    console.log('test masuk 5 : '+(indexX-1)+' '+(indexY-1));
    if(this.traceRoute((indexX-1),(indexY-1),arrSave)){
      console.log('masuk 5 : '+(indexX-1)+' '+(indexY-1));
      this.searchword(arrBoard,indexX-1,indexY-1,word,arrSave);
    }

    console.log('trace 6 :'+this.traceRoute(indexX,indexY-1,arrSave));
    console.log('test masuk 6 : '+indexX+' '+(indexY-1));
    if(this.traceRoute(indexX,(indexY-1),arrSave)){

      console.log('masuk 6 : '+indexX+' '+(indexY-1));
      this.searchword(arrBoard,indexX,indexY-1,word,arrSave);
    }



}else{
  // temp.push(word);
  // console.log(temp);
  // return temp;

  // arrSave.splice(0, arrSave.length);
  // console.log(arrSave);

}
