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
const boxes = [
  new Box(150, 0, 50, 50),
  new Box(200, 0, 50, 50),
  new Box(250, 0, 50, 50),
];

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

const checkInAir = () => {
  let air = true;
  if (player.y == 0) {
    air = false;
  }
  if (
    boxes.some((box) => player.y <= box.y + box.height + 1) &&
    boxes.some((box) => player.y - box.y + box.height > box.y + box.height + 40)
  ) {
    if (
      (boxes.some((box) => player.x + player.width <= box.x + box.width) &&
        boxes.some((box) => player.x + player.width >= box.x)) ||
      (boxes.some((box) => player.x >= box.x) &&
        boxes.some((box) => player.x <= box.x + box.width))
    ) {
      air = false;
      player.y = boxes[0].y + boxes[0].height + 0.01;
    }
  }
  return air;
};

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas antes de redesenhar
  if (right && !colision()) {
    player.walk(right, left);
  } else if (left && !colision()) {
    player.walk(right, left);
  }
  player.inAir = checkInAir();
  player.fall();
  drawPlayer(ctx, player);
  drawBox(ctx, boxes);
  requestAnimationFrame(gameLoop);
};

gameLoop();
