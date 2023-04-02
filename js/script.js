let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = 'X';

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('game').children[row].children[col].innerText = currentPlayer;
        if (checkWinner(row, col)) {
            alert(currentPlayer + ' wins!');
            resetBoard();
        } else if (isBoardFull()) {
            alert('It\'s a draw!');
            resetBoard();
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }
}

function checkWinner(row, col) {
    return (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) ||
        (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) ||
        (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer);
}

function isBoardFull() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetBoard() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            board[row][col] = '';
            document.getElementById('game').children[row].children[col].innerText = '';
        }
    }
    currentPlayer = 'X';
}
