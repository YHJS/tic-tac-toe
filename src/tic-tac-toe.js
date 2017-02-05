class TicTacToe {
    constructor() {
        this.field = [["", "", ""],["", "", ""],["", "", ""]];
        this.player = "x";
        this.moves = 9;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!!this.field[rowIndex][columnIndex]) return;
        this.field[rowIndex][columnIndex] = this.player;
        let f = this.field;

        h_v:for (var i = 0; i < 3; i++) {
            // horizontal match
            if (f[i][0] == f[i][1] && f[i][0] == f[i][2] && f[i][0]) {
                this.winner = this.player;
                break h_v;
            }
            // vertical match
            if (f[0][i] == f[1][i] && f[0][i] == f[2][i] && f[0][i]) {
                this.winner = this.player;
                break h_v;
            }
        }

        if (!this.winner) {
            // diagonal match
            if (f[0][0] == f[1][1] && f[0][0] == f[2][2] && f[0][0] ||
                f[0][2] == f[1][1] && f[0][2] == f[2][0] && f[0][2]) {
                this.winner = this.player;
            }
        }

        this.moves--;
        this.player = this.player === "x" ? "o" : "x";
    }

    isFinished() {
        return (!!this.winner || this.isDraw()) ? true : false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.moves === 0;
    }

    isDraw() {
        return (!this.noMoreTurns() || this.winner) ? false : true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex] ? this.field[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;