class Game {
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.width = width;
        this.height = height;
        this.debug = false;
        this.map = new Map();
        this.player = new Player();
    }
}