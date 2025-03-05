class Player {
  constructor(name) {
    this.name = name;
    this.width = 50;
    this.height = 50;
    this.x = 50;
    this.y = 0;
    this.speed = 5;
    this.strongJump = 100;
    this.inAir = false;
  }
  walk(r, l) {
    if (r) this.x += this.speed;
    if (l) this.x -= this.speed;
  }
}
export default Player;
