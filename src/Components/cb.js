module.exports = class cboard {

  constructor() {
    this.moves = 0;


    // Iniitalize visited
    this.visited = new Array(new Array());
    // Initialize visited to false
    for (var x=0 ; x< 8 ; x++){
      this.visited[x]=[];
      for (var y=0; y<8; y++) {
        this.visited[x][y]=false;
      }
    }
    this.currX = Math.floor(Math.random()*8);
    this.currY = Math.floor(Math.random()*8);

  }
  getCurrentPos() {
    return [this.currX, this.currY];
  }

  getCurrentSquare() {
    return this.currX + (8 * this.currY)
  }

  isCurrentSquareVisited(number) {
    let xPos = number % 8;
    let yPos = (number - xPos) / 8;
    return this.visited[xPos][yPos];
  }

  validMoves(number) {
    // Valid moves from this square
    /// x | y
       // ------
       // +1, +2
       // +1, -2
       // -1, +2
       // -1, -2
       // +2, +1
       // +2, -1
       // -2, +1
       // -2, -1
       let xPos = number % 8;
       let yPos = (number - xPos) / 8;
       let moves = [];


       if (xPos+1<8 && yPos+2 <8 && this.visited[xPos+1][yPos+2]===false)
      {
        moves.push([xPos+1, yPos+2]);
      }
      if (xPos + 1 < 8 && yPos - 2 >= 0 && this.visited[xPos+1][yPos-2] === false)
      {
        moves.push([xPos+1, yPos-2]);
      }
      if (xPos - 1 >= 0 && yPos + 2 < 8 && this.visited[xPos-1][yPos+2] === false)
      {
        moves.push([xPos-1, yPos+2]);
      }
      if (xPos - 1 >= 0 && yPos - 2 >= 0 && this.visited[xPos-1][yPos-2] === false)
      {
        moves.push([xPos-1, yPos-2]);
      }
      if (xPos + 2  < 8 && yPos + 1 < 8 && this.visited[xPos+2][yPos+1] === false)
      {
        moves.push([xPos+2, yPos+1]);
      }
      if (xPos + 2 < 8 && yPos - 1 >= 0  && this.visited[xPos+2][yPos-1] === false)
      {
        moves.push([xPos+2, yPos-1]);
      }
      if (xPos - 2 >= 0 && yPos + 1 < 8 && this.visited[xPos-2][yPos+1] === false)
      {
        moves.push([xPos-2, yPos+1]);
      }
      if (xPos - 2 >= 0 && yPos -1 >= 0 && this.visited[xPos-2][yPos-1] === false)
      {
        moves.push([xPos-2, yPos-1]);
      }

      return moves;
  }

  makeNextMove() {
    // Make next move here
     if (this.moves === 63)
     {
       alert("Finished!")
       return
     }
     var moveList = this.validMoves(this.getCurrentSquare());

     let least = 100;
     let nextX = -1;
     let nextY = -1;
     for (let move of moveList)
     {
       let moveX = move[0];
       let moveY = move[1];
       console.log(move);
       let moveSquare = moveX + (moveY*8);
       let number = this.validMoves(moveSquare).length;

       if (number < least)
       {
         nextX = moveX;
         nextY = moveY;
         least = number;
       }
     }

     this.visited[this.currX][this.currY] = true;
     this.currX = nextX;
     this.currY = nextY;
     this.moves = this.moves + 1;

  }
  resetTour() {
    this.moves = 0;


    // Iniitalize visited
    this.visited = new Array(new Array());
    // Initialize visited to false
    for (var x=0 ; x< 8 ; x++){
      this.visited[x]=[];
      for (var y=0; y<8; y++) {
        this.visited[x][y]=false;
      }
    }
    this.currX = Math.floor(Math.random()*8);
    this.currY = Math.floor(Math.random()*8);
  }
}
