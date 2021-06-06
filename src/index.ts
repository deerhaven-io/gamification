import { config, CellState } from './config';
import { makeGrid } from './grid';
import { getNextFrameCells } from './logic';
import { setAliveCells, toggleState } from './state';


export const initGame = async () => {

  makeGrid({
    onGameEnd:() => {},
    onGameStart: (cells) => {
     const nextCells = getNextFrameCells(cells)
     const doomedCells = [...document.getElementsByClassName(CellState.ALIVE)];
     doomedCells.forEach(doomed => {
       doomed.className = CellState.EMPTY;
     })
      nextCells.forEach((cell) =>{
        cell.state = CellState.ALIVE; 
      })
      setAliveCells(nextCells);
    },
  });


}

initGame();
