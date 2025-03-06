let right = false;
let left = false;
let space = false;
let shift = false;

document.addEventListener("keydown", (evt) => {
  const key = evt.key;

  if (key == "ArrowRight") right = true;
  if (key == "ArrowLeft") left = true;
  if (key == " ") space = true;
  if (key == "Shift") shift = true;
});
document.addEventListener("keyup", (evt) => {
  const key = evt.key;

  if (key == "ArrowRight") right = false;
  if (key == "ArrowLeft") left = false;
  if (key == " ") space = false;
  if (key == "Shift") shift = false;
});
export { right, left, space, shift };
