class BoggleBoard{
  constructor(jumlahPapan){
    this._papan = jumlahPapan;
    //this._board = this.testPapan()   //TEST MAKE PAPAN BUATAN
    this._board = this.shake()
    // this._kamus = ['MAKAX', 'ZAS']
    this._kamus = ['AYO', 'APA',
                    'BAB', 'BIA',
                    'CIA', 'CAYO', 'COY',
                    'DIA', 'DAI',
                    'EKA', 'ELG', 'EGO', 'ERS', 'ETY',
                    'FRA', 'FAR', 'FAT',
                    'GILA', 'GO', 'GI', 'GIL', 'GOR', 'GIT',
                    'HRY', 'HRD', 'HTM','HAI',
                    'IHA', 'INA', 'IGO', 'ILK', 'ILW', 'IMN',
                    'KGT', 'KMN', 'KM', 'KAN',
                    'MKN', 'MNM', 'MGO', 'MIT', 'MAKAN',
                    'NHT', 'NXT', 'NN', 'NEO', 'NGH', 'NAT', 'NOX',
                    'OPO', 'ORG',
                    'TANGO',
                    'ZOLA', 'ZTY' ]
  }

  testPapan(){
    let arr = [];
    arr = [['M', 'A', 'K', 'O'],
           ['A', 'Z', 'A', 'G'],
           ['O', 'A', 'X', 'S'],
           ['A', 'X', 'S', 'X']]
    return arr;
  }

  shake(){
    let arr = [];
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<this._papan; i++){
      arr.push([]);
      for(let j=0;j<this._papan;j++){
        arr[i][j] = possible.charAt(Math.floor(Math.random() * possible.length));
      }
    }
    return arr;
  }

  solve(){
    let arr = []
    let kata
    for(let i=0;i<this._kamus.length;i++){
      let tmp = this._kamus[i];
      for(let row=0; row<this._papan; row++){

        for(let col=0; col<this._papan; col++){

          //CEK HURUF PERTAMA tmp[0] DI CORDINAT BERAPA AJA DAPATNYA
          if(this._board[row][col] == tmp[0]){
            // this.cekWord(tmp.slice(1), [row,col], [[row, col]], tmp[0] )
            // console.log('TEST BACAAN '+i+ '----'+this.cekWord(tmp.slice(1), [row,col], [[row, col]], tmp[0] ))
            let kata = this.cekWord(tmp.slice(1), [row,col], [[row, col]], tmp[0], tmp)
            if(kata === tmp){
              arr.push(kata)
            }
          }
        }
      }
    }
    // console.log(arr)

    if(arr.length == 0){
      console.log('tidak ada data ditemukan')
    }
    else{
      console.log(`${arr.length} words found :`)
      for(let j=0;j<arr.length;j++){
        console.log(arr[j])
      }
    }

  }


  cekWord(kata, posSaatIni, posPernahDiinjek, tmpKata, kataAsli){
    let finish;
    if(kata.length == 0){
      return tmpKata
    }
    let area = [[-1,-1],[-1,0],[-1,1],
                 [0,-1],[0,1],
                 [1,-1],[1,0],[1,1]];
        for(let i=0; i<area.length;i++){
          if(posSaatIni[0]+area[i][0] >= 0 && posSaatIni[0]+area[i][0]<this._papan
            && posSaatIni[1]+area[i][1] >= 0 && posSaatIni[1]+area[i][1]<this._papan && this.pernahDiinjek([posSaatIni[0]+area[i][0], posSaatIni[1]+area[i][1]], posPernahDiinjek)==true){
              let newrow = posSaatIni[0]+area[i][0];
              let newcol = posSaatIni[1]+area[i][1];
              if(this._board[newrow][newcol] == kata[0]){
                // console.log(this._board[newrow][newcol])
                // console.log([newrow, newcol])
                // console.log(posPernahDiinjek)
                // console.log('Kordinat tujuan :'+[posSaatIni[0]+area[i][0], posSaatIni[1]+area[i][1]]+ ', Pernah Diinjek : '+posPernahDiinjek+'---'+this.pernahDiinjek([posSaatIni[0]+area[i][0], posSaatIni[1]+area[i][1]], posPernahDiinjek))
                posPernahDiinjek.push([newrow,newcol])


                let finish = this.cekWord(kata.slice(1), [newrow,newcol], posPernahDiinjek, tmpKata+kata[0], kataAsli)
                if(finish == kataAsli){
                  return finish;
                }
                else {
                  this.cekWord(kata.slice(1), [newrow,newcol], posPernahDiinjek, tmpKata+kata[0], kataAsli)
                }

              }
            }
        }
    return ''




  }

  pernahDiinjek(posTujuan,posPernahDiinjek){
    // console.log('Pos tujuan: ', posTujuan, 'PernahDiinjek ', posPernahDiinjek)
    for(let i=0;i<posPernahDiinjek.length;i++){
      if(posTujuan[0] == posPernahDiinjek[i][0] && posTujuan[1] == posPernahDiinjek[i][1]){
        // console.log(posTujuan[0], posPernahDiinjek[i][0], posTujuan[1], posPernahDiinjek[i][1])
        // console.log('false')
        return false
      }
    }
    return true
  }



}

let game = new BoggleBoard(4);
console.log(game._board);
game.solve()

