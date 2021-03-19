import { CellState } from "./config";

export const toggleState = (cell: HTMLTableCellElement): CellState => {
  let ret = CellState.UNKNOWN;
  if (cell.classList.contains(CellState.EMPTY)) {
    ret = CellState.ALIVE;
    cell.classList.remove(CellState.EMPTY);
    cell.classList.add(CellState.ALIVE);
  } else if (cell.classList.contains(CellState.ALIVE)) {
    ret = CellState.EMPTY;
    cell.classList.add(CellState.EMPTY);
    cell.classList.remove(CellState.ALIVE);
  }
  return ret;
}
