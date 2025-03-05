class Player {
  constructor(name) {
    this.name = name;
    this.width = 50;
    this.heght = 50;
    this.x = 50;
    this.y = 0;
    this.velocidade = 5;
  }
  walk(r, l) {
    if (r) this.x += this.velocidade;
    if (l) this.x -= this.velocidade;
  }
}
export default Player;
