class Map {
    constructor() {
        this.ctx = getGameCanvas();
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }

    draw() {
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}
