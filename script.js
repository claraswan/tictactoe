"use strict"


const gameBoard = (() => { //module to control the gameboard

    const board = document.querySelectorAll('.box'); //array of boxes
    const resetButton = document.getElementById('reset');
    const startButton = document.getElementById('start');
    const announcement = document.getElementById('announcement');
    resetButton.style.display = 'none';
    let currentPlayer = 'clara';

    const placeXOrO = (index) => {
        let clickedBox = document.getElementById(index);
        if (clickedBox.innerText === '' && startButton.style.display === 'none') {
            if (currentPlayer === 'clara') {
                clickedBox.innerText = 'X';
                currentPlayer = 'anna';
            } else if (currentPlayer === 'anna') {
                clickedBox.innerText = 'O';
                currentPlayer = 'clara';
            }
        }
        if (displayController.checkForWin(board)) {
            announcement.innerText('X wins!')
            clearBoard();
        }
    }

    const clickBoxEvent = () => {
        for (let box of board) {
            let i = box.getAttribute('id');
            box.addEventListener('click', () => {
                placeXOrO(i);
            })
        }
    }

    const clearBoard = () => {
        resetButton.addEventListener('click', () => {
            for (let box of board) {
                box.innerText = '';
                startButton.style.display = '';
                resetButton.style.display = 'none';
            }
        })
    }

    return {
        clickBoxEvent,
        clearBoard
    }

})();

gameBoard.clearBoard();

const displayController = (() => { //module to control the flow of the game

    const resetButton = document.getElementById('reset');
    const startButton = document.getElementById('start');

    const startGame = () => {
        startButton.addEventListener('click', () => {
            gameBoard.clickBoxEvent();
            resetButton.style.display = '';
            startButton.style.display = 'none';
        })
    }

    const checkForWin = (board) => {

        if (board[0] === 'X') {
            if (board[1] === 'X' && board[2] === 'X') {
                return true;
            } else if (board[3] === 'X' && board[6] === 'X') {
                return true;
            } else if (board[4] === 'X' && board[8] === 'X') {
                return true;
            }
        }

        if (board[8] === 'X') {
            if (board[2] === 'X' && board[5] === 'X') {
                return true;
            } else if (board[6] === 'X' && board[7] === 'X') {
                return true;
            }
        }

        if (board[4] === 'X') {
            if (board[1] === 'X' && board[7] === 'X') {
                return true;
            } else if (board[3] === 'X' && board[5] === 'X') {
                return true;
            }
            else if (board[2] === 'X' && board[6] === 'X') {
                return true;
            }
        }
        
    }

    return {
        startGame,
        checkForWin
    }

})();

displayController.startGame();

/* const Player = (name) => { //factory function for players

}; */