import { CellState, config, IGameConfig } from "./config";
import { toggleState, getAliveCells } from "./state";

const makeRow = (table: HTMLTableElement): HTMLTableRowElement => {
  const row = document.createElement('tr');
  table.appendChild(row);
  return row;
}

const makeCell = (row: HTMLTableRowElement, x: number, y: number): HTMLTableCellElement => {
  const cell = document.createElement('td');
  row.appendChild(cell);
  cell.id = `cell_x_${x}_y_${y}`;
  cell.classList.add(CellState.EMPTY);
  cell.addEventListener('click', (e) => toggleState(cell, x, y));
  return cell;
}

export const makeGrid = (gameConfig: IGameConfig):void => {

    const table: HTMLTableElement = document.getElementById('game') as HTMLTableElement;

    for(let y = 0; y < config.rows; y += 1) {
      const row = makeRow(table);
      // await sleep(50);
      for(let x = 0; x < config.columns; x += 1) {
        makeCell(row, x, y);
      }
    }
   
    const startBtn: HTMLButtonElement = document.getElementById('game_start') as HTMLButtonElement;
    startBtn.addEventListener('click', () => {
      console.log('test')
      if (startBtn.innerHTML === 'Start') {
       //startBtn.innerHTML = 'Pause';
       gameConfig.onGameStart(getAliveCells());
        }
//       else {
//         startBtn.innerHTML = "Start";
// gameConfig.onGameEnd();
//       }
//       startBtn.classList.toggle('start');
//       startBtn.classList.toggle('pause');

    });
}
