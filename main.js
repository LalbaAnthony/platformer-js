class Game {
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.width = width;
        this.height = height;
        this.player = new Player();
    }
}