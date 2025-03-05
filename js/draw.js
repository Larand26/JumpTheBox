const drawPlayer = (ctx, player, canvas) => {
  ctx.fillStyle = "#f1f1f1";
  ctx.fillRect(player.x, player.y, player.width, player.heght);
};
export { drawPlayer };
