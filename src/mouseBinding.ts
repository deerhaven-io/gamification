import type { Paddle } from "./gameState";

const mouseMoveHandler = (e: any, canvas: HTMLCanvasElement, paddle: Paddle) => {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddle.x = relativeX - paddle.width/2;
    }
    // var relativeY = e.clientY - canvas.offsetTop;
    // if(relativeY > 0 && relativeY < canvas.height) {
    //     paddle.y = relativeY - paddle.height/2;
    // }
}

export const initMouseBindings = (canvas: HTMLCanvasElement, paddle: Paddle) => {
  document.addEventListener('mousemove', (e) => mouseMoveHandler(e, canvas, paddle), false);
}
