
var startEvent = "DOMContentLoaded";
if(window.cordova){
    startEvent = "deviceready";
}
document.addEventListener(startEvent,function() {
    
    
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '',
                                { preload: preload, create: create });

    function preload () {
        game.load.image('logo', 'phaser.png');
		game.load.image('sky', 'assets/sky.png');
		game.load.image('ground', 'assets/platform.png');
		game.load.image('star', 'assets/star.png');
		game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    }

    function create () {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'star');
        logo.anchor.setTo(0.5, 0.5);
    }
	
	function update(){
		
	}

});
