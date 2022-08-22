"use strict"


const gameBoard = (() => { //module to control the gameboard

    const board = document.querySelectorAll('.box'); //array of boxes
    const resetButton = document.getElementById('reset');
    const startButton = document.getElementById('start');
    const announcement = document.getElementById('announcement');
    const playerOne = document.getElementById('player1');
    const playerTwo = document.getElementById('player2');
    resetButton.style.display = 'none';
    let currentPlayer = 'clara';

    const placeXOrO = (index) => {
        let clickedBox = document.getElementById(index);
        if (clickedBox.innerText === '' && startButton.style.display === 'none') {
            if (currentPlayer === 'clara') {
                playerOne.style.fontWeight = '';
                playerTwo.style.fontWeight = 700;
                playerOne.style.fontSize = '';
                playerTwo.style.fontSize = '20px';
                clickedBox.innerText = 'X';
                currentPlayer = 'anna';
            } else if (currentPlayer === 'anna') {
                playerTwo.style.fontWeight = '';
                playerOne.style.fontWeight = 700;
                playerTwo.style.fontSize = '';
                playerOne.style.fontSize = '20px';
                clickedBox.innerText = 'O';
                currentPlayer = 'clara';
            }
        }
        
        if (displayController.checkForPlayerOneWin(board)) {
            announcement.innerText = 'Player 1 wins!';
            setTimeout(function () {
                announcement.innerText = '';
                clearBoard();
            }, 2000);
            
        } else if (displayController.checkForPlayerTwoWin(board)) {
            announcement.innerText = 'Player 2 wins!';
            setTimeout(function () {
                announcement.innerText = '';
                clearBoard();
            }, 2000);
        }
    }

    const clickBoxEvent = () => {
        do {
            for (let box of board) {
                let i = box.getAttribute('id');
                box.addEventListener('click', () => {
                    placeXOrO(i);
                    console.log(displayController.checkForPlayerOneWin(board));
                    console.log(displayController.checkForPlayerTwoWin(board));
                })
            }
        } while ((displayController.checkForPlayerOneWin(board) === false) && (displayController.checkForPlayerTwoWin(board) === false));
    }

    const clearBoard = () => {
        for (let box of board) {
            box.innerText = '';
            startButton.style.display = '';
            resetButton.style.display = 'none';
            playerOne.style.fontWeight = '';
            playerTwo.style.fontWeight = '';
            playerOne.style.fontSize = '';
            playerTwo.style.fontSize = '';
        }
    }

    const resetBoard = () => {
        resetButton.addEventListener('click', () => {
            clearBoard();
        })
    }

    return {
        clickBoxEvent,
        clearBoard,
        resetBoard
    }

})();

gameBoard.clearBoard();
gameBoard.resetBoard();

const displayController = (() => { //module to control the flow of the game

    const playerOne = document.getElementById('player1');
    const resetButton = document.getElementById('reset');
    const startButton = document.getElementById('start');

    const startGame = () => {
        startButton.addEventListener('click', () => {
            gameBoard.clickBoxEvent();
            resetButton.style.display = '';
            startButton.style.display = 'none';
            playerOne.style.fontWeight = 700;
            playerOne.style.fontSize = '20px';
        })
    }

    const checkForPlayerOneWin = (board) => {

        if (board[0].innerText === 'X') {
            if (board[1].innerText === 'X' && board[2].innerText === 'X') {
                return true;
            } else if (board[3].innerText === 'X' && board[6].innerText === 'X') {
                return true;
            } else if (board[4].innerText === 'X' && board[8].innerText === 'X') {
                return true;
            }
        } else if (board[8].innerText === 'X') {
            if (board[2].innerText === 'X' && board[5].innerText === 'X') {
                return true;
            } else if (board[6].innerText === 'X' && board[7].innerText === 'X') {
                return true;
            }
        } else if (board[4].innerText === 'X') {
            if (board[1].innerText === 'X' && board[7].innerText === 'X') {
                return true;
            } else if (board[3].innerText === 'X' && board[5].innerText === 'X') {
                return true;
            }
            else if (board[2].innerText === 'X' && board[6].innerText === 'X') {
                return true;
            }
        }
        
    }

    const checkForPlayerTwoWin = (board) => {

        if (board[0].innerText === 'O') {
            if (board[1].innerText === 'O' && board[2].innerText === 'O') {
                return true;
            } else if (board[3].innerText === 'O' && board[6].innerText === 'O') {
                return true;
            } else if (board[4].innerText === 'O' && board[8].innerText === 'O') {
                return true;
            }
        } else if (board[8].innerText === 'O') {
            if (board[2].innerText === 'O' && board[5].innerText === 'O') {
                return true;
            } else if (board[6].innerText === 'O' && board[7].innerText === 'O') {
                return true;
            }
        } else if (board[4].innerText === 'O') {
            if (board[1].innerText === 'O' && board[7].innerText === 'O') {
                return true;
            } else if (board[3].innerText === 'O' && board[5].innerText === 'O') {
                return true;
            }
            else if (board[2].innerText === 'O' && board[6].innerText === 'O') {
                return true;
            }
        }
        
    }

    return {
        startGame,
        checkForPlayerOneWin,
        checkForPlayerTwoWin
    }

})();

displayController.startGame();

/* const Player = (name) => { //factory function for players

}; */