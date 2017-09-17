class TicTacToe {
    constructor() {
        this.grid=[[null,null,null],[null,null,null],[null,null,null]];
        this.CurrentPlayerSymbol='x';
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.grid[rowIndex][columnIndex]===null){
            this.grid[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
            this.CurrentPlayerSymbol==='x' ? this.CurrentPlayerSymbol='o' : this.CurrentPlayerSymbol='x';
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) return true;
        else return false;
    }

    getWinner() {
        if (this.grid[0][0] === this.grid[0][1] && this.grid[0][1] === this.grid[0][2] && this.grid[0][2] !== null) return this.grid[0][2];
        if (this.grid[1][0] === this.grid[1][1] && this.grid[1][1] === this.grid[1][2] && this.grid[1][2] !== null) return this.grid[1][2];
        if (this.grid[2][0] === this.grid[2][1] && this.grid[2][1] === this.grid[2][2] && this.grid[2][2] !== null) return this.grid[2][2];

        if (this.grid[0][0] === this.grid[1][0] && this.grid[1][0] === this.grid[2][0] && this.grid[2][0] !== null) return this.grid[2][0];
        if (this.grid[0][1] === this.grid[1][1] && this.grid[1][1] === this.grid[2][1] && this.grid[2][1] !== null) return this.grid[2][1];
        if (this.grid[0][2] === this.grid[1][2] && this.grid[1][2] === this.grid[2][2] && this.grid[2][2] !== null) return this.grid[2][2];

        if (this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2] && this.grid[2][2] !== null) return this.grid[2][2];
        if (this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0] && this.grid[2][0] !== null) return this.grid[2][0];
        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < this.grid.length; i++) {
            if(this.grid[i].indexOf(null) !== -1) return false;
          }
          return true;
    }   

    isDraw() {
        if (this.getWinner() === null && this.noMoreTurns()) return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
