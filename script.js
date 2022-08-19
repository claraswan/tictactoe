"use strict"

const GameBoard = (() => {
    const board = []
    return {
      board
    };
  })();

  const DisplayController = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();


const Player = () => {

};