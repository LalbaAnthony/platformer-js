class Game {
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.ctx = getGameCanvas();
        this.width = width;
        this.height = height;
        this.debug = false;
        this.map = new Map();
        this.player = new Player();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(50, 50, 50, 50);
    }
}