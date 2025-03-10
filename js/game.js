const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

// Imports
import Player from "./Player.js";
import Box from "./Box.js";
import { drawPlayer, drawBox } from "./draw.js";
// Teclas
import { left, right, space, shift } from "./input.js";

const player = new Player("larand");

const boxes = [];

const randomNumber = () => {
  for (let i = 0; i < 15; i++) {
    const r = Math.floor(Math.random() * 551);
    if (!boxes.at(-1)) {
      boxes.push(new Box(150, 0, 50, 50));
      return;
    }
    const ultima = boxes.at(-1);
    if (ultima.x - r > 350 || r - ultima < -350) {
      boxes.push(new Box(r, i * 50, 50, 50));
    }
  }
};
export { boxes };
const colision = () => {
  for (const box of boxes) {
    if (
      player.x + player.width == box.x &&
      right &&
      player.y <= box.y + box.height &&
      player.y + player.height >= box.y
    ) {
      return true;
    } else if (
      player.x == box.x + box.width &&
      left &&
      player.y <= box.y + box.height &&
      player.y + player.height >= box.y
    ) {
      return true;
    }
  }
  if (player.x <= 0 && left) {
    player.x = 0;
    return true;
  }
  if (player.x + player.width >= canvas.width && right) {
    player.x = canvas.width - player.width;
    return true;
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
        if (player.y - box.y + box.height >= 90) {
          player.y = box.y + box.height + 0.1;

          return false;
        }
      }
      if (
        player.y + player.height >= box.y &&
        player.y + player.height <= box.y + box.height
      ) {
        player.y = box.y - player.height;

        return true;
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
  player.run(shift);
  drawPlayer(ctx, player);
  drawBox(ctx, boxes);
  requestAnimationFrame(gameLoop);
};

randomNumber();
gameLoop();
