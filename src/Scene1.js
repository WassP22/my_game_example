class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.image("background","assets/images/background.png");
        this.load.image("ship1","assets/images/ship.png");
    }
    create() {

        
        this.add.text(200, 200, "loading game ...", {font: "25px Arial", fill: "yellow"});
        this.scene.start("playGame")  ;
      }
}