class Boggle{
  constructor(){
    this.board=[];
    this.alp="BCDFGHJKLMNPQRSTVWXYZ";
    this.vow="AEIOU";
    this.dictionary=['MIZAB','PIZA','PIKE','IMP','KIWI','IMPI','BIHI','AJEK','ZIB','PHI','PEK','MIK','KIM','KHI','KEP','JAZ','JAB','HIP','EJA','BIK']
  }
  testboard(){
    let brd = [['P','H','I','W'],['E','K','I','P'],['J','Z','M','B'],['A','B','D','G']]
    return brd;
  }
  solve(board){
    let str,
    result=[];
    for(let i=0; i<board.length; i++){
      for(let j=0; j<board[i].length; j++){
        for(let l=0; l<this.dictionary.length; l++){
          if(board[i][j]===this.dictionary[l][0]){
            str = this.checkWords(board, this.dictionary[l].slice(1), [i,j], [[i,j]], this.dictionary[l][0], this.dictionary[l])
            if(str===this.dictionary[l]){
              result.push(str)
            }
          }
        }
      }
    }
    result= result.filter( function( item, index, inputArray ) {
            return inputArray.indexOf(item) == index;
            });
    console.log(board)
    console.log(`Found ${result.length} words:`)
    console.log(result.join("  |  "))
    return result
  }
  checkWords(board, rest, position, visited, firstletter, word, count=0){
    let i = position[0]
    let j = position[1]
    let str = firstletter
    if(rest==='' && str === word){
      return word
    }
    debugger
    for(let r=-1;r<=1;r++){
      for(let c=-1;c<=1;c++){
        if(i+r >= 0 && j+c >= 0 && i+r < board.length && j+c < board.length){
          if(board[i+r][j+c]===rest[0] && this.checkVisited([i+r,j+c], visited)){
            str+=board[i+r][j+c];
            visited.push([i+r,j+c]);
            return this.checkWords(board, rest.slice(1), [i+r,j+c], visited, str, word)
          }
        }
      }
    }
    if(count <= 7){
      count++
      return this.checkWords(board, str.slice(-1)+rest, visited[visited.length-1] ,visited, str.slice(0, -1), word , count)
    }
     
  }
  checkVisited(target,visited){
    for(let i=0;i<visited.length;i++){
      if(target[0] === visited[i][0] && target[1] === visited[i][1]){
        return false
      }
    }
    return true
  }
  shake(num){
    this.board=[]
    var cons = 0;
    for (let i=0; i<num; i++){
      this.board.push([]);
    }
    for (let i=0; i<this.board.length; i++){
      for (let j=0; j<num; j++){
        if (Math.round(Math.random()) === 1 || cons>Math.floor(num*num*0.7)){
          this.board[i].push(this.vow.charAt(Math.floor(Math.random()*this.vow.length)))
        } else {
          this.board[i].push(this.alp.charAt(Math.floor(Math.random()*this.alp.length)));
        }
        if(this.board[i][j].match(/[^aeiou]/gi)){
          cons++;
        }
      }
    }
    return this.board;
  }
}

let bg = new Boggle;
bg.solve(bg.testboard());
bg.solve(bg.shake(4));
bg.solve(bg.shake(5));