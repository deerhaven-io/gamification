export enum CellState {
  UNKNOWN = 'cell-invalid',
  EMPTY = 'cell-dead',
  ALIVE = 'cell-alive',
}

interface IConfig {
  rows: number;
  columns: number;
}

export const config: IConfig = {
  rows: 50,
  columns: 50,
};
