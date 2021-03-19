import { config, CellState } from './config';
import { toggleState } from './state';
import { sleep } from './utils';

const makeRow = (table: HTMLTableElement): HTMLTableRowElement => {
  const row = document.createElement('tr');
  table.appendChild(row);
  return row;
}

const makeCell = (row: HTMLTableRowElement): HTMLTableCellElement => {
  const cell = document.createElement('td');
  row.appendChild(cell);
  return cell;
}

// TODO: make on screen buttons
export const initGame = async () => {
  const table: HTMLTableElement = document.getElementById('game') as HTMLTableElement;

  for(let i = 0; i < config.rows; i += 1) {
    const row = makeRow(table);
    await sleep(50);
    for(let c = 0; c < config.columns; c += 1) {
      const cell = makeCell(row);
      cell.classList.add(CellState.EMPTY);
      cell.addEventListener('click', (e) => toggleState(cell));
    }
  }
}

initGame();
