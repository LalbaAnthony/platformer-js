class Game {
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.width = width;
        this.height = height;
        this.debug = false;
        this.player = new Player();
    }
}