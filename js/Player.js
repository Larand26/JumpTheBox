class Player {
  constructor(name) {
    this.name = name;
    this.width = 50;
    this.height = 50;
    this.x = 150;
    this.y = 200;
    this.speed = 5;
    this.strongJump = 10;
    this.inAir = false;
    this.gravity = -0.5;
    this.velocityY = 0;
  }
  walk(n) {
    if (n) this.x += n * this.speed;
  }
  fall() {
    if (this.inAir) {
      this.velocityY += this.gravity;
      this.y += this.velocityY;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.velocityY = 0;
    }
  }
  jump(p) {
    if (p && !this.inAir) {
      this.inAir = true;
      this.velocityY = this.strongJump;
      requestAnimationFrame(() => this.fall());
    }
  }
}
export default Player;
