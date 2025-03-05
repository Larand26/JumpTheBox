let right = false;
let left = false;

document.addEventListener("keydown", (evt) => {
  const key = evt.key;

  if (key == "ArrowRight") right = true;
  if (key == "ArrowLeft") left = true;
});
document.addEventListener("keyup", (evt) => {
  const key = evt.key;

  if (key == "ArrowRight") right = false;
  if (key == "ArrowLeft") left = false;
});
export { right, left };
