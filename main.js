let displayconfig = {
   type: Phaser.WEBGL,
   width: 738,
   height: 537,
   backgroundColor: 0,
   scene: [Setup, Splash, TitleScreen, LoadingScreen, Monologue]
}

let game = new Phaser.Game(displayconfig);
