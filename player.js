class Player {
    constructor() {
        this.ctx = getGameCanvas();
        this.score = 0;
        this.width = 10;
        this.height = 10;
        this.x = 0;
        this.y = this.ctx.canvas.height - this.height;
    }

    draw() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    moveLeft() {
        this.x -= 10;
    }

    moveRight() {
        this.x += 10;
    }

    moveUp() {
        this.y -= 10;
    }

    moveDown() {
        this.y += 10;
    }

    updateScore() {
        this.score++;
    }
}