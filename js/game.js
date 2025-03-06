const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

// Imports
import Player from "./Player.js";
import Box from "./Box.js";
import { drawPlayer, drawBox } from "./draw.js";
// Teclas
import { left, right, space } from "./input.js";

const player = new Player("larand");
const boxes = [new Box(150, 0, 50, 50)];

const colision = () => {
  if (
    boxes.some((box) => player.x + player.width == box.x) &&
    right &&
    boxes.some((box) => player.y <= box.y + box.height)
  ) {
    return true;
  } else if (
    boxes.some((box) => player.x == box.x + box.width) &&
    left &&
    boxes.some((box) => player.y <= box.y + box.height)
  ) {
    return true;
  }
  return false;
};

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas antes de redesenhar
  if (right && !colision()) {
    player.walk(right, left);
  } else if (left && !colision()) {
    player.walk(right, left);
  }
  drawPlayer(ctx, player);
  drawBox(ctx, boxes);
  requestAnimationFrame(gameLoop);
};

gameLoop();
