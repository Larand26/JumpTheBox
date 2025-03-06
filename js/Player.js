class Player {
  constructor(name) {
    this.name = name;
    this.width = 50;
    this.height = 50;
    this.x = 150;
    this.y = 200;
    this.speed = 5;
    this.strongJump = 100;
    this.inAir = false;
    this.gravity = -0.5;
  }
  walk(r, l) {
    if (r) this.x += this.speed;
    if (l) this.x -= this.speed;
  }
  fall() {
    if (this.inAir) {
      this.gravity -= 0.2;
      this.y += this.gravity;
    } else {
      this.gravity = -0.5;
    }
    if (this.y < 0) this.y = 0;
  }
}
export default Player;
