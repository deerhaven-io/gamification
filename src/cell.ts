import { CellState } from "./config";

export class Cell {

  constructor(cell: Partial<Cell>) {
    Object.assign(this, cell);
  }

  x!: number;
  y!: number;

  get state(): CellState {
    const el = this.getel();
    if(el.classList.contains(CellState.ALIVE)) {
      return CellState.ALIVE;
    }
    if(el.classList.contains(CellState.EMPTY)) {
      return CellState.EMPTY;
    }
    return CellState.UNKNOWN;
  }

  set state(state: CellState) {
    const el = this.getel();
    el.className = state;
  }

  getid(){
   return `cell_x_${this.x}_y_${this.y}`
  }

  getel(){
    const ret = document.getElementById(this.getid())
    if(!ret) throw new Error('no cell');
    return ret
   }
}
