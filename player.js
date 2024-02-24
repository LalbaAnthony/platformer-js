class Player {
    constructor() {
        this.ctx = getGameCanvas();
        this.score = 0;
        this.width = 10;
        this.height = 10;
        this.x = 0;
        this.y = this.ctx.canvas.height - this.height;
    }

    display() {
        // console.log('y', this.y, 'x', this.x, 'width', this.width, 'height', this.height);
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        if (this.x <= 0) {
            return;
        }
        this.x -= 10;
        requestAnimationFrame(this.display());
    }

    moveRight() {
        if (this.x >= this.ctx.canvas.width - this.width) {
            return;
        }
        this.x += 10;
        requestAnimationFrame(this.display());
    }

    moveUp() {
        if (this.y <= 0) {
            return;
        }
        this.y -= 10;
        requestAnimationFrame(this.display());
    }

    moveDown() {
        if (this.y >= this.ctx.canvas.height - this.height) {
            return;
        }
        this.y += 10;
        requestAnimationFrame(this.display());
    }

    updateScore() {
        this.score++;
    }
}