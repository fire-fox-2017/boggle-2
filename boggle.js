"use strict"
const fs = require('fs')
// Release 1

class Boggle {
    constructor(boardlength) {
        this._boardlength = boardlength;
        this._stateVisit = this.boardVisit()

        this._boardData = this.boggle_board()
        /*
        this._boardData = [
            ['A', 'M', 'K', 'N'],
            ['M', 'A', 'N', 'A'],
            ['N', 'K', 'M', 'A'],
            ['M', 'N', 'K', 'A']
        ]
        */

        this._cekBoard = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ]

        this._dict = []
        //this._dict = ['AKAN', 'AKAN', 'KUDA', 'MANA', 'AKU']

    }

    getData(source) {
        let data = fs.readFileSync(source).toString();
        let regex = /[A-Z][A-Z]+/g;
        let tempWord = data.match(regex);
        this._dict = tempWord;
    }

    boggle_board() {
        let arrBoard = [];
        for (let i = 0; i < this._boardlength; i++) {
            let arrInd = [];
            for (let k = 0; k < this._boardlength; k++) {
                arrInd.push(this.shake());
            }
            arrBoard.push(arrInd);
        }
        return arrBoard;
    }

    shake() {
        let text = "";
        let possible = "AIUEOBCDEFAIUEOGHIJKAIUEOLMNOPAIUEOQRSTUAIUEOVWXYZ";
        for (let j = 0; j < 1; j++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    boardVisit() {
        let tempArr1 = []
        for (let i = 0; i < 4; i++) {
            let tempArr2 = []
            for (let j = 0; j < 4; j++) {
                tempArr2.push(true)
            }
            tempArr1.push(tempArr2)
        }
        return tempArr1
    }

    solve() {
        debugger
        let tempWord = []
        for (let a = 0; a < this._dict.length; a++) {
            let iterateWord = this._dict[a]
            for (let i = 0; i < this._boardData.length; i++) {
                for (let j = 0; j < this._boardData[i].length; j++) {
                    // mulai
                    if (iterateWord[0] == this._boardData[i][j]) {
                        this._stateVisit[i][j] = false
                        let cekKata = this.correctWord(iterateWord.slice(1), [i, j], iterateWord[0], iterateWord)
                        if (cekKata == iterateWord) {
                            tempWord.push(cekKata)
                        }
                    }
                }
            }
        }

        if (tempWord.length == 0) {
            console.log('Kata ga ada');
        } else {
            console.log(`Daftar kata yg ada:`);
            for (let b = 0; b < tempWord.length; b++) {
                console.log(tempWord[b]);
            }
        }
    }

    correctWord(wordSisa, coordinateXY, tempWord, word) {
        debugger
        if (wordSisa.length === 0) {
            return tempWord
        }

        for (let i = 0; i < this._cekBoard.length; i++) {
            if (coordinateXY[0] + this._cekBoard[i][0] >= 0 && coordinateXY[0] + this._cekBoard[i][0] < this._boardlength) {
                if (coordinateXY[1] + this._cekBoard[i][1] >= 0 && coordinateXY[1] + this._cekBoard[i][1] < this._boardlength) {
                    let destX = coordinateXY[0] + this._cekBoard[i][0]
                    let destY = coordinateXY[1] + this._cekBoard[i][1]
                    if (this._stateVisit[destX][destY] == true) {
                        if (this._boardData[destX][destY] == wordSisa[0]) {
                            this._stateVisit[destX][destY] = false
                            let cekKata = this.correctWord(wordSisa.slice(1), [destX, destY], tempWord + wordSisa[0], word)
                            if (cekKata == word) {
                                return cekKata
                            } else {
                                this.correctWord(wordSisa.slice(1), [destX, destY], tempWord + wordSisa[0], word)
                            }
                        }
                    }
                }
            }
        }
    }
}

let boggle = new Boggle(4)
let data = "data.js";
boggle.getData(data);
// console.log(boggle.boardVisit());
console.log(boggle._boardData);
boggle.solve()
