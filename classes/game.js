class Game {
    constructor(debug = false) {
        this.ctx = getGameCanvas();
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.debug = debug;
        this.map = new Map();
        this.player = new Player();
    }

    checkCollision() {
        if (this.player.x < 0) {
            this.player.x = 0;
        }
        if (this.player.x + this.player.width > this.width) {
            this.player.x = this.width - this.player.width;
        }
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.map.draw();
        this.checkCollision();
        this.player.draw();
        if (this.debug) console.log(`Player position: x: ${this.player.x}, y: ${this.player.y}`);
        requestAnimationFrame(this.update.bind(this));
    }

    start() {
        this.update();
    }

    toggleDebug() {
        this.debug = !this.debug;
        this.update();
    }
}