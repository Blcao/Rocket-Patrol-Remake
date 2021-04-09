class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }
    create() {
        //green background
        this.add.rectangle(0, borderUISize + borderPadding,
                            game.config.width, borderWidth*2,
                            0x00FF00).setOrigin(0,0);
    }
}