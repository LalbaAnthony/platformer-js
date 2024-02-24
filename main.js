class Game {
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.ctx = getGameCanvas();
        this.width = width;
        this.height = height;
        this.debug = false;
        this.map = new Map();
        this.player = new Player();
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.player.draw();
        requestAnimationFrame(this.update.bind(this));
    }

    start() {
        this.update();
    }
}