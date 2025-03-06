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
const box1 = new Box(150, 0, 50, 50);

const colision = () => {
  if (player.x + player.width == box1.x && right) {
    return true;
  } else if (player.x == box1.x + box1.width && left) {
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
  drawBox(ctx, box1);
  requestAnimationFrame(gameLoop);
};

gameLoop();
