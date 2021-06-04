import { Cell } from "./cell";
import { CellState } from "./config";

let aliveCells: Cell[] = [];

// TODO: refactor x/y coordinate passing to simplify
export const toggleState = (cell: HTMLTableCellElement, x: number, y: number): CellState => {
  let ret = CellState.UNKNOWN;
  let aliveCell = aliveCells.find((c) => c.x === x && c.y === y );
  if (cell.classList.contains(CellState.EMPTY)) {
    ret = CellState.ALIVE;
    cell.classList.remove(CellState.EMPTY);
    cell.classList.add(CellState.ALIVE);
    if(!aliveCell) {
      aliveCells.push(new Cell({x,y}));
    }
  } else if (cell.classList.contains(CellState.ALIVE)) {
    ret = CellState.EMPTY;
    cell.classList.add(CellState.EMPTY);
    cell.classList.remove(CellState.ALIVE);
    if(aliveCell) {
      const idx = aliveCells.indexOf(aliveCell);
      aliveCells.splice(idx, 1);
    }
  }
  return ret;
}

export const getAliveCells = () => aliveCells;

export const setAliveCells = (cells: Cell[]) => aliveCells = cells;

export const ReDrawcells = () => {}


// (aliveCell) ? this : that;

