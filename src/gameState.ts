import { getGameCanvas } from './canvas';

const canvas = getGameCanvas();
const _ctx = canvas.getContext('2d');
if(!_ctx) throw new Error('2D rendering context is not defined');
const ctx: CanvasRenderingContext2D = _ctx;

interface Ball {
  radius: number;
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  contactPaddle?: boolean;
}

interface Brick {
  rowCount: number;
  columnCount: number;
  width: number;
  height: number;
  padding: number;
  offsetTop: number;
  offsetLeft: number;
}

export interface Paddle {
  height: number;
  width: number;
  y: number;
  x: number;
}

interface KeyState {
  right: boolean;
  left: boolean;
  up: boolean;
  down: boolean;
  enter: boolean;
}

interface KeyMap {
  right: number;
  left: number;
  up: number;
  down: number;
  spacebar: number;
  enter: number;
}

export interface GameState {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  score: number,
  lives: number,
  // TODO: update type
  bricks: any[],
  ball: Ball,
  brick: Brick;
  paddle: Paddle;
  keyState: KeyState;
  keyMap: KeyMap;
  paused: boolean;
};

export const getNewGameState = (): GameState => {
  const newGameState: GameState = {
    canvas,
    ctx,
    score: 0,
    lives: 5,
    bricks: [],
    ball: {
      radius: 10,
      x: canvas.width / 2,
      y: canvas.height - 30,
      directionX: 2,
      directionY: -2,
    },
    brick: {
      rowCount: 5,
      columnCount: 4,
      width: 80,
      height: 25,
      padding: 65,
      offsetTop: 40,
      offsetLeft: 40,
    },
    paddle: {
      height: 15,
      width: 74,
      y: 0,
      x: canvas.width - 74,
    },
    keyState: {
      right: false,
      left: false,
      up: false,
      down: false,
      enter: false,
    },
    keyMap: {
      right: 39,
      left: 37,
      up: 38,
      down: 40,
      spacebar: 32,
      enter: 13,
    },
    paused: false,
  };

  for (let c = 0; c < newGameState.brick.columnCount; c += 1) {
    newGameState.bricks[c] = [];
    for (let r = 0; r < newGameState.brick.rowCount; r += 1) {
      newGameState.bricks[c][r] = { ball: { x: 2, y: 2 }, status: 1 };
    }
  }
  return newGameState;
}

export const gameState = getNewGameState();

export default gameState;
