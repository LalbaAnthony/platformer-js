class Player {
    constructor() {
        this.ctx = getGameCanvas();
        this.score = 0;
        this.width = 10;
        this.height = 10;
        this.isJumping = false;
        this.x = 0;
        this.y = this.ctx.canvas.height - this.height;
    }

    draw() {
        this.gravity();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    moveLeft() {
        this.x -= 5;
    }

    moveRight() {
        this.x += 5;
    }

    jump() {
        if (this.isJumping) return;
        this.isJumping = true;
        this.y -= 5;
    }

    gravity(strength = .1) {
        if (this.y < this.ctx.canvas.height - this.height)  {
            this.y += strength;
        }
        if (this.y >= this.ctx.canvas.height - this.height) {
            this.isJumping = false;
        }
    }

    updateScore() {
        this.score++;
    }
}