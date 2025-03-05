const drawPlayer = (ctx, player) => {
  ctx.fillStyle = "#f1f1f1";
  ctx.fillRect(player.x, player.y, player.width, player.height);
};
export { drawPlayer };
