import { Cell } from './cell';
import { CellState } from './config';

export const getNextFrameCells = (cells: Cell[], aliveCells: Cell[] = [], range: {min: number, max: number} = {min : 2, max : 3}
  ) => {
  //const aliveCells: Cell[] = [];
  
  cells.forEach((cell) => {
    const neighbors: Cell[] = [
      new Cell({ x: cell.x - 1, y: cell.y + 1}), //nw
      new Cell({ x: cell.x, y: cell.y + 1}), //n
      new Cell({ x: cell.x + 1, y: cell.y + 1}), //ne
      new Cell({ x: cell.x - 1, y: cell.y }),
      new Cell({ x: cell.x + 1, y: cell.y }),
      new Cell({ x: cell.x - 1, y: cell.y - 1}),
      new Cell({ x: cell.x, y: cell.y - 1 }),
      new Cell({ x: cell.x + 1, y: cell.y - 1 }), //se
    ];
     
    //If the cell has exactly 2-3 neighbors, it survives
    //If the cell has exactly 1 neighbor or more than 3 neighbors, it dies
    const alive = neighbors.filter(neighbor => neighbor.state === CellState.ALIVE);
    const survives = alive.length === range.min || alive.length === range.max;
    if (survives && !aliveCells.find(c => c.x == cell.x && c.y === cell.y)) {
      aliveCells.push(cell);
    }
    if(cell.state === CellState.ALIVE) {
      //If any dead cell has 3 alive neighbors, the dead cell comes to life
      const dead = neighbors.filter(neighbor => neighbor.state === CellState.EMPTY);
      console.log(dead)
      getNextFrameCells(dead,aliveCells,{min : 3, max : 3} );
    }
  });
  return aliveCells;
}


