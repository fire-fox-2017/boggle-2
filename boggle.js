"use strict"

class BoggleBoard {
  constructor() {
    this.arrAlfabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","e","s","t","u","v","w","x","y","z","a","i","u","e","o"];
    this.board=[];
    this.arrData=[];
    this.arrResult=[];
    this.arrExample=[["a","n","z","z"],["y","z","z","z"],["z","z","z","z"],["z","z","z","z"]];
  }

  shake() {//random board
    for(let i=0;i<4;i++){
      let temp=[];
      for(let j=0;j<4;j++){
        let rand=Math.floor((Math.random() * this.arrAlfabet.length));
        temp.push(this.arrAlfabet[rand]);
      }
      this.board.push(temp);
    }
    return this.board;
  }

  solve(){
    for(let i=0;i<4;i++){
      for(let j=0;j<4;j++){
            this.getData(i,j);
      }
    }
    console.log(this.arrResult);
  }

  getData(il,jl){
    let fs  = require("fs");
    let arrTemp = fs.readFileSync("data.js").toString().split('\n');
    for(let i=0;i<arrTemp.length-1;i++){
    if(this.searchData(arrTemp[i],il,jl,arrTemp[i].length,0)){
        if(this.arrResult.includes(arrTemp[i])){
          }else{
          this.arrResult.push(arrTemp[i]);
          }
       }
    }
  }

  searchData(str,i,j,l,step,ind=0,kena=[]){
    if(l>ind){
      if(step==0){
        let sumIn=i+","+j;
        if(str[ind]==this.board[i][j]){
          step++;ind++;kena.push(i+","+j);
          return this.searchData(str,i,j,l,step,ind,kena);
        }else{
          return false;
        }
      }else if(step==1){
        let sumIn=(i-1)+","+(j-1);
        if(this.checkStep(str[ind],(i-1),(j-1),kena,sumIn)){
          step=0;
          return this.searchData(str,(i-1),(j-1),l,step,ind,kena);
        }else{
          step++;
          return this.searchData(str,i,j,l,step,ind,kena);
        }
      }else if(step==2){
        let sumIn=(i-1)+","+j;
        if(this.checkStep(str[ind],(i-1),j,kena,sumIn)){
          step=0;
          return this.searchData(str,(i-1),j,l,step,ind,kena);
        }else{
          step++;
          return this.searchData(str,i,j,l,step,ind,kena);
        }
      }else if(step==3){
        let sumIn=(i-1)+","+(j+1);
        if(this.checkStep(str[ind],(i-1),(j+1),kena,sumIn)){
          step=0;
          return this.searchData(str,(i-1),(j+1),l,step,ind,kena);
        }else{
          step++;
          return this.searchData(str,i,j,l,step,ind,kena);
        }
      }else if(step==4){
        let sumIn=i+","+(j+1);
        if(this.checkStep(str[ind],i,(j+1),kena,sumIn)){
          step=0;
          return this.searchData(str,i,(j+1),l,step,ind,kena);
        }else{
          step++;
          return this.searchData(str,i,j,l,step,ind,kena);
        }
      }else if(step==5){
        let sumIn=(i+1)+","+(j+1);
        if(this.checkStep(str[ind],(i+1),(j+1),kena,sumIn)){
          step=0;
          return this.searchData(str,(i+1),(j+1),l,step,ind,kena);
        }else{
          step++;
          return this.searchData(str,i,j,l,step,ind,kena);
        }
      }else if(step==6){
        let sumIn=(i+1)+","+j;
        if(this.checkStep(str[ind],(i+1),j,kena,sumIn)){
          step=0;
          return this.searchData(str,(i+1),j,l,step,ind,kena);
        }else{
          step++;
          return this.searchData(str,i,j,l,step,ind,kena);
        }
      }else if(step==7){
        let sumIn=(i+1)+","+(j-1);
        if(this.checkStep(str[ind],(i+1),(j-1),kena,sumIn)){
          step=0;
          return this.searchData(str,(i+1),(j-1),l,step,ind,kena);
        }else{
          step++;
          return this.searchData(str,i,j,l,step,ind,kena);
        }
      }else if(step==8){
        let sumIn=i+","+(j-1);
      if(this.checkStep(str[ind],i,(j-1),kena,sumIn)){
          step=0;
        return this.searchData(str,i,(j-1),l,step,ind,kena);
        }else{
          step++;
          return this.searchData(str,i,j,l,step,ind,kena);
        }
      }
    }else{
      if(l==ind){
        return true;
      }else{
        return false;
      }
    }
  }
  checkStep(str,a,b,arr,params1){
    if(a>=0&&b>=0&&a<4&&b<4){
      if(str==this.board[a][b]&&this.checkindex(arr,params1)){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  checkindex(params,value){
    let result;
    for(let i=0;i<params.length;i++){
      if(params[i]==value){
        result=false;
      }else{
        result=true;
      }
    }
    return result;
  }
}

let my_BoggleBoard= new BoggleBoard();
console.log(my_BoggleBoard.shake());
my_BoggleBoard.solve();
