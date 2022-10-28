class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {

        this.background = this.add.image(50,50,"background");
        this.background.setOrigin(0,0);
        this.background.displayWidth = this.sys.canvas.width;
        this.background.displayHeight = this.sys.canvas.height;
        
        this.ship1 = this.add.image(this.background.displayWidth/6,this.background.displayHeight/6,"ship1")
        this.ship1.setScale(3);
        this.ship1.flipY = true;
        this.ship1.angle += 35;

        this.add.text(20,20,"playing game ...", {font: "25px Arial", fill: "yellow"});
    
      }

      resetShipPosition(ship){
        ship.y = 0;
        ship.x = Phaser.Math.Between(0, this.background.displayWidth);

      }
      moveship(ship,speed){
        ship.y += speed;
        if (ship.y > this.background.displayHeight){
            this.resetShipPosition(ship);
        }
      }

      

      update(){
        this.moveship(this.ship1, 2);
      }
}