import type { Cell } from "./cell";

export enum CellState {
  UNKNOWN = 'cell-invalid',
  EMPTY = 'cell-empty',
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

export interface IGameConfig {
  onGameStart: (cells: Cell[]) => void;
  onGameEnd: () => void;
}
