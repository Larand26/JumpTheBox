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
const boxes = [new Box(150, 0, 50, 50), new Box(250, 60, 50, 50)];

const colision = () => {
  for (const box of boxes) {
    if (
      player.x + player.width == box.x &&
      right &&
      player.y <= box.y + box.height
    ) {
      return true;
    } else if (
      player.x == box.x + box.width &&
      left &&
      player.y <= box.y + box.height
    ) {
      return true;
    }
  }

  return false;
};

const checkInAir = () => {
  if (player.y == 0) {
    return false;
  }
  for (const box of boxes) {
    if (player.x < box.x + box.width && player.x + player.width > box.x) {
      if (player.y <= box.y + box.height) {
        player.y = box.y + box.height + 0.1;
        return false;
      }
    }
  }
  return true;
};

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas antes de redesenhar
  if (right && !colision()) {
    player.walk(1);
  } else if (left && !colision()) {
    player.walk(-1);
  }
  player.inAir = checkInAir();
  if (player.inAir) {
    player.fall();
  } else {
    player.velocityY = 0;
  }
  player.jump(space);
  drawPlayer(ctx, player);
  drawBox(ctx, boxes);
  requestAnimationFrame(gameLoop);
};

gameLoop();
