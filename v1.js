class BoogleBoard {
  constructor(size) {
    this._boogleBoardSize = size;
    // this._boogleBoard = [];
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this._alphabet = alphabet.split('');
    // this._dataKata = [];

    this._boggleBoard = [['D', 'E', 'A', 'T'],
                         ['Z', 'K', 'C', 'I'],
                         ['M', 'A', 'E', 'M'],
                         ['B', 'T', 'A', 'U']];


    this._kamus = ['DEK', 'ATI', 'DEKAT', 'KAIT', 'ANAK', 'ICK', 'AEM', 'TAU'];

  }

  shake() { //memasukkan huruf acak ke dalam papan boggle
    for (var baris = 0; baris < this._boogleBoardSize; baris++) {
      let isiArray = [];
      for (var kolom = 0; kolom < this._boogleBoardSize; kolom++) {
        let kata = this._alphabet[Math.floor(Math.random() * 25) + 0];
        isiArray.push(kata);
      }
      this._boogleBoard.push(isiArray);
    }
    return this._boogleBoard;
  }

  solve() {
    let hasilArr = [];
    let tmpKata;
    for (var i = 0; i < this._kamus.length; i++) {
      tmpKata = this._kamus[i];
      for (var baris = 0; baris < this._boogleBoardSize; baris++) {
        for (var kolom = 0; kolom < this._boogleBoardSize; kolom++) {
          if (this._boggleBoard[baris][kolom] == tmpKata[0]) {
            let kata = this.cekHuruf(tmpKata.slice(1), tmpKata[0], tmpKata, [baris, kolom], [[baris, kolom]]);
            if (kata == tmpKata) {
              hasilArr.push(kata);

            }
          }
        }

      }
    }
    // console.log(hasilArr.length);

    if (hasilArr.length == 0) {
      console.log('Kata Tidak Ditemukan');
    } else {
      console.log(`${hasilArr.length} kata ditemukan dalam papan boggle`);
      for (var i = 0; i < hasilArr.length; i++) {
        console.log(hasilArr[i]);
      }
    }

  }

  cekHuruf(kataSekarang, huruf, kataAsli, posisiSekarang, posisiYangDilewati) {
    // console.log(`${kataSekarang}, ${huruf}. ${kataAsli}, ${posisiSekarang}, ${posisiYangDilewati}`);
    let hasilAkhir;

    if (kataSekarang.length == 0) {
      return huruf;
    }

    let areaCek = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1. - 1],
      [1, 0],
      [1, 1]
    ];



    for (var i = 0; i < areaCek.length; i++) {
      //kondisi pertama cek apakah dari posisi sekarang, pada baris x-1 indeks barisnya minimal 0 dan pada x+1 indeks barisnya
      //maksimal sesuai panjang baris boggle board

      //kondisi kedua cek apakah dari posisi sekarang. pada kolom x-1 indeks kolomnya minimal 0 dan pada x+1 indeks barisnya
      //maksimal sesuai panjang kolom boggle board
      var baris = posisiSekarang[0] + areaCek[i][0];
      var kolom = posisiSekarang[1] + areaCek[i][1];
      // console.log(`baris ${i} : ${baris}`);
      // console.log(`kolom ${i} : ${kolom}`);

      if (baris >= 0 && baris < this._boogleBoardSize &&
        kolom >= 0 && kolom < this._boogleBoardSize &&
        this.cekKoordinatHurufSimpan([baris, kolom], posisiYangDilewati) == true) {
        var barisBaru = baris;
        var kolomBaru = kolom;

        // console.log('a');

        // console.log(`baris ${baris} : ${barisBaru}`);
        // console.log(`kolom ${kolom} : ${kolomBaru}`);

        if (this._boggleBoard[barisBaru][kolomBaru] == kataSekarang[0]) {
          posisiYangDilewati.push([barisBaru, kolomBaru]);

          hasilAkhir = this.cekHuruf(kataSekarang.slice(1), huruf + kataSekarang[0], kataAsli, [barisBaru, kolomBaru], posisiYangDilewati);
          if (hasilAkhir == kataAsli) {
            return hasilAkhir;
          } else {
            this.cekHuruf(kataSekarang.slice(1), huruf + kataSekarang[0], kataAsli, [barisBaru, kolomBaru], posisiYangDilewati);
          }
        }

      }
    }
    return ''
  }

  //cek apakah huruf pada posisi tertentu pernah dilewati
  cekKoordinatHurufSimpan(posisiSelanjutnya, posisiYangDilewati) {
    for (var i = 0; i < posisiYangDilewati; i++) {
      if (posisiSelanjutnya[0] == posisiYangDilewati[i][0] && posisiSelanjutnya[1] == posPernahDiinjek[i][1]) {
        return false;
      }
    }
    return true;
  }

}

let papan = new BoogleBoard(4);
console.log(papan._boggleBoard);
papan.solve();

// console.log(papan.shake());
