const drawPlayer = (ctx, player) => {
  ctx.fillStyle = "#f1f1f1";
  ctx.fillRect(player.x, player.y, player.width, player.height);
};
const drawBox = (ctx, box) => {
  ctx.fillStyle = "#05abba";
  ctx.fillRect(box.x, box.y, box.width, box.height);
};
export { drawPlayer, drawBox };
