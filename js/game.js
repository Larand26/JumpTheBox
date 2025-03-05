const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

// Imports
import Player from "./Player.js";
import { drawPlayer } from "./draw.js";
// Teclas
import { left, right } from "./input.js";

const player = new Player("larand");

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas antes de redesenhar
  player.walk(right, left);
  drawPlayer(ctx, player, canvas);
  requestAnimationFrame(gameLoop);
};

gameLoop();
