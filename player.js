class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.ctx = getGameCanvas();
        this.width = 10;
        this.height = 10;
        this.x = 0;
        this.y = this.ctx.canvas.height - this.height;
    }

    display() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "blue";
        console.log('y', this.y, 'x', this.x, 'width', this.width, 'height', this.height);
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        if (this.x <= 0) {
            return;
        }
        this.x -= 10;
        this.display();
    }

    moveRight() {
        if (this.x >= this.ctx.canvas.width - this.width) {
            return;
        }
        this.x += 10;
        this.display();
    }

    jump() {
        if (this.y <= 0) {
            return;
        }
        this.y -= 10;
        this.display();
    }

    updateScore() {
        this.score++;
    }
}