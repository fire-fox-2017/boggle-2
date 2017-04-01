// "use strict"
//
// class BoggleBoard {
//   constructor() {
//     this.arrAlfabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","e","s","t","u","v","w","x","y","z"];
//     this.board=[];
//     this.arrData=[];
//     this.arrResult=[];
//     this.arrExample=[["a","n","z","z"],["y","z","z","z"],["z","z","z","z"],["z","z","z","z"]];
//   }
//
//   shake() {//random board
//     for(let i=0;i<4;i++){
//       let temp=[];
//       for(let j=0;j<4;j++){
//         let rand=Math.floor((Math.random() * this.arrAlfabet.length));
//         temp.push(this.arrAlfabet[rand]);
//       }
//       this.board.push(temp);
//     }
//     return this.board;
//   }
//
//   solve(){
//     for(let i=0;i<4;i++){
//       for(let j=0;j<4;j++){
//             this.getData(i,j);
//       }
//     }
//     console.log(this.arrResult);
//   }
//
//   getData(il,jl){
//     let fs  = require("fs");
//     let arrTemp = fs.readFileSync("data.js").toString().split('\n');
//     //console.log(arrTemp+"-----"+"i : "+il+" j : "+jl+" l "+arrTemp.length);
//     for(let i=0;i<arrTemp.length-1;i++){
//       //console.log(arrTemp[i]+"--- i :"+i+"---"+"il : "+il+" jl : "+jl+" l "+arrTemp.length);
//       //console.log("hasil--------------------- "+" i : "+i+""+this.solve2(arrTemp[i],il,jl,arrTemp[i].length,0));
//       if(this.solve2(arrTemp[i],il,jl,arrTemp[i].length,0)){
//         if(this.arrResult.includes(arrTemp[i])){
//           }else{
//           this.arrResult.push(arrTemp[i]);
//           }
//        }
//        //console.log("--------"+this.arrResult);
//     }
//   }
//
//   solve2(str,i,j,l,step,ind=0,kena=[]){
//     if(l>ind){
//     //console.log("masuk solve2 l : "+l+" ind : "+ind+" step "+step);
//       if(step==0){
//         let sumIn=i+","+j;
//         //console.log("masuk 0 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn);
//         if(str[ind]==this.board[i][j]){
//           step++;ind++;kena.push(i+","+j);
//         //    console.log("masuk if 0 board step "+step+" ind "+ind+" kena "+kena);
//           return this.solve2(str,i,j,l,step,ind,kena);
//         }else{
//           return false;}
//       }else if(step==1){
//         let sumIn=(i-1)+","+(j-1);
//       //console.log("masuk 1 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn);
//       //console.log("hasil check "+this.checkStep(str[ind],(i-1),(j-1),kena,sumIn));
//         if(this.checkStep(str[ind],(i-1),(j-1),kena,sumIn)){
//         //if(str[ind]==this.board[i-1][j-1]&&this.checkindex(kena,sumIn)){
//           step=0; ind++;
//           //kena.push((i-1)+","+(j-1));
//           return this.solve2(str,(i-1),(j-1),l,step,ind,kena);
//         }else{
//           step++; //console.log("masuk 1 board KECUALI : "+step+" i "+i+" j "+j);
//
//           return this.solve2(str,i,j,l,step,ind,kena);}
//       }else if(step==2){
//         let sumIn=(i-1)+","+j;
//         //console.log("masuk 2 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn+" i "+i+" j "+j);
//         //console.log("hasil check "+this.checkStep(str[ind],(i-1),j,kena,sumIn));
//         if(this.checkStep(str[ind],(i-1),j,kena,sumIn)){
//         //if(str[ind]==this.board[i-1][j]&&this.checkindex(kena,sumIn)){
//           step=0;
//           // kena.push((i-1)+","+j);
//           return this.solve2(str,(i-1),j,l,step,ind,kena);
//         }else{step++;
//           //console.log("masuk 2 board KECUALI : "+step);
//           return this.solve2(str,i,j,l,step,ind,kena);}
//       }else if(step==3){
//         let sumIn=(i-1)+","+(j+1);
//         //console.log("masuk 3 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn+" i "+i+" j "+j);
//         //console.log("hasil check "+this.checkStep(str[ind],(i-1),(j+1),kena,sumIn));
//         if(this.checkStep(str[ind],(i-1),(j+1),kena,sumIn)){
//         //if(str[ind]==this.board[i-1][j+1]&&this.checkindex(kena,sumIn)){
//           step=0;
//           //kena.push((i-1)+","+(j+1));
//           return this.solve2(str,(i-1),(j+1),l,step,ind,kena);
//         }else{step++;  //console.log("masuk 3 board KECUALI : "+step);
//           return this.solve2(str,i,j,l,step,ind,kena);}
//       }else if(step==4){
//         let sumIn=i+","+(j+1);
//         //console.log("masuk 4 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn+" i "+i+" j "+j);
//       //console.log("hasil check "+this.checkStep(str[ind],i,(j+1),kena,sumIn));
//       if(this.checkStep(str[ind],i,(j+1),kena,sumIn)){
//         //if(str[ind]==this.board[i][j+1]&&this.checkindex(kena,sumIn)){
//           step=0;
//           //kena.push(i+","+(j+1));
//           //console.log("masuk if 4 board step "+step+" ind "+ind+" kena "+kena+" sumin "+sumIn);
//           return this.solve2(str,i,(j+1),l,step,ind,kena);
//         }else{step++;//console.log("masuk 4 board KECUALI : "+step);
//           return this.solve2(str,i,j,l,step,ind,kena);}
//       }else if(step==5){
//         let sumIn=(i+1)+","+(j+1);
//         //console.log("masuk 5 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn+" i "+i+" j "+j);
//         //console.log("hasil check "+this.checkStep(str[ind],(i+1),(j+1),kena,sumIn));
//       if(this.checkStep(str[ind],(i+1),(j+1),kena,sumIn)){
//         //if(str[ind]==this.board[i+1][j+1]&&this.checkindex(kena,sumIn)){
//           step=0;
//           //kena.push((i+1)+","+(j+1));
//           //console.log("masuk if 5 board step "+step+" ind "+ind+" kena "+kena+" sumin "+sumIn);
//
//           return this.solve2(str,(i+1),(j+1),l,step,ind,kena);
//         }else{step++;//console.log("masuk 5 board KECUALI : "+step);
//           return this.solve2(str,i,j,l,step,ind,kena);}
//       }else if(step==6){
//         let sumIn=(i+1)+","+j;
//       //console.log("masuk 6 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn+" i "+i+" j "+j);
//         //console.log("hasil check "+this.checkStep(str[ind],(i+1),j,kena,sumIn));
//       if(this.checkStep(str[ind],(i+1),j,kena,sumIn)){
//         //if(str[ind]==this.board[i+1][j]&&this.checkindex(kena,sumIn)){
//           step=0;
//           // kena.push((i+1)+","+j);
//         //console.log("masuk if 6 board step "+step+" ind "+ind+" kena "+kena+" sumin "+sumIn);
//         return this.solve2(str,(i+1),j,l,step,ind,kena);
//       }else{step++;//console.log("masuk 6 board KECUALI : "+step);
//           return this.solve2(str,i,j,l,step,ind,kena);}
//       }else if(step==7){
//         let sumIn=(i+1)+","+(j-1);
//       //console.log("masuk 7 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn+" i "+i+" j "+j);
//       //console.log("hasil check "+this.checkStep(str[ind],(i+1),(j-1),kena,sumIn));
//       //console.log("check i :"+(i+1)+" j "+(j-1));
//     if(this.checkStep(str[ind],(i+1),(j-1),kena,sumIn)){
//         //if(str[ind]==this.board[i+1][j-1]&&this.checkindex(kena,sumIn)){
//           step=0;
//           //kena.push((i+1)+","+(j-1));
//         //console.log("masuk if 7 board step "+step+" ind "+ind+" kena "+kena+" sumin "+sumIn);
//           return this.solve2(str,(i+1),(j-1),l,step,ind,kena);
//         }else{step++;//console.log("masuk 7 board KECUALI : "+step);
//           return this.solve2(str,i,j,l,step,ind,kena);}
//       }else if(step==8){
//         let sumIn=i+","+(j-1);
//       //console.log("masuk 8 board : "+this.arrExample[i][j]+" str : "+str[ind]+" kena : "+kena+" sum : "+sumIn+" i "+i+" j "+j);
//       //console.log("hasil check "+this.checkStep(str[ind],(i),(j-1),kena,sumIn));
//       if(this.checkStep(str[ind],i,(j-1),kena,sumIn)){
//         //if(str[ind]==this.board[i][j-1]&&this.checkindex(kena,sumIn)){
//           step=0;
//           // kena.push(i+","+(j-1));
//           //console.log("masuk if 8 board step "+step+" ind "+ind+" kena "+kena+" sumin "+sumIn);
//           return this.solve2(str,i,(j-1),l,step,ind,kena);
//         }else{step++;//console.log("masuk 4 board KECUALI : "+step);
//           return this.solve2(str,i,j,l,step,ind,kena);}
//       }
//     }else {
//       if(l==ind){
//         return true;
//       //    console.log("masuk ------------------ l : "+l+" ind : "+ind);
//       }else{
//         return false;
//         //console.log("masuk 1 l : "+l+" ind : "+ind);
//       }
//     }
//   }
//   checkStep(str,a,b,arr,params1){
//   //console.log("str : "+str+" a : "+a+" b : "+b);
//     if(a>=0&&b>=0&&a<4&&b<4){
//     //console.log("MASUK CHECK str : "+str+" board : "+this.arrExample[a][b]+" arr "+arr+" params "+params1);
//       if(str==this.board[a][b]&&this.checkindex(arr,params1)){
//       //console.log("TRUE");
//         return true;
//       }else{
//         //console.log("FALSE");
//         return false;
//       }
//     }else{
//       return false;
//     }
//   }
//   checkindex(params,value){
//     let result;
//     //console.log("p : "+params+" pl : "+params.length);
//     for(let i=0;i<params.length;i++){
//       //console.log("p : "+params[i]+" va : "+value);
//       if(params[i]==value){
//       //console.log("FALSE2");
//         result=false;
//       }else{
//         //console.log("TRUE2");
//         result=true;
//       }
//     }
//     return result;
//   }
// }
//
// let my_BoggleBoard= new BoggleBoard();
// console.log(my_BoggleBoard.shake());
// my_BoggleBoard.solve();
