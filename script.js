"use strict"


const gameBoard = (() => { //module to control the gameboard

    const board = document.querySelectorAll('.box'); //array of boxes
    let currentPlayer = 'anna';
    const resetButton = document.getElementById('reset');

    const placeXOrO = (index) => {
        let clickedBox = document.getElementById(index);
            if (currentPlayer === 'clara') {
                clickedBox.innerText = 'X';
            } else if (currentPlayer === 'anna') {
                clickedBox.innerText = 'O';
            }
    };

    const clickEvent = () => {
        for (let box of board) {
            let i = box.getAttribute('id');
            box.addEventListener('click', () => {
                placeXOrO(i);
            });
        };
    }

    const clearBoard = () => {
        resetButton.addEventListener('click', () => {
            console.log('reset button clicked');
            for (let box of board) {
                box.innerText = '';
            };
        })
    };

    return {
      clickEvent,
      clearBoard
    };

})();

gameBoard.clearBoard();
gameBoard.clickEvent();


const displayController = (() => { //module to control the flow of the game

    // const clara = Player('X');
    // const anna = Player('O');

    const checkForRow = (board) => {
        //code
    }
    const checkForColumn = (board) => {
        //code
    }
    const checkForDiagonal = (board) => {
        //code
    }
    const checkForWin = (board) => {
        if (checkForRow || checkForColumn || checkForDiagonal) {
            return true;
        }
        return false;
    }

    return {
        checkForWin
    };

})();


const Player = (name) => { //factory function for players

};

// const clara = Player('clara');
// const anna = Player('anna');