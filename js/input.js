let right = false;
let left = false;
let space = false;

document.addEventListener("keydown", (evt) => {
  const key = evt.key;

  if (key == "ArrowRight") right = true;
  if (key == "ArrowLeft") left = true;
  if (key == " ") space = true;
});
document.addEventListener("keyup", (evt) => {
  const key = evt.key;

  if (key == "ArrowRight") right = false;
  if (key == "ArrowLeft") left = false;
  if (key == " ") space = false;
});
export { right, left, space };
