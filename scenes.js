class Setup extends Phaser.Scene {
   constructor() {
      super('setup');
   }

   preload() {
      this.load.path = "./assets/";
      this.load.image("aaa", "images/a.png"); //is pixel art background of main menu but a still image
      this.load.image("rosiesunnybackground", "images/rosiesunnybackground.png");
      this.load.image("cloud", "images/cloud.png");
      this.load.image("rosiesunnylogo", "images/febbienrosbutsmallermaybe.png"); 
      this.load.image("rosieandsunnypixels", "images/rosiesunnyebigger.png");
      this.load.image("seed", "images/seede.png");
      this.load.audio("cheeryintrosong", "sounds/cheery.wav");
      this.load.audio("mainmenuthemesong", "sounds/mainmenutheme.wav");
      this.load.audio("loadingsong", "sounds/phoneringdyingout.wav");
      this.load.image("kindredregardstitle", "images/kindredregards.png")
      this.load.image("rosiesunnygames", "images/rosiesunnygamestitle.png");
      this.load.audio("menuclicksound", "sounds/mainmenuclicks2.wav");
      this.load.audio("menuticks", "sounds/menuclicks1.wav");
      this.load.image("arrowwhite", "images/selectarrowwhite.png");
      this.load.image("arrowpink", "images/selectarrowpink.png");
      this.load.image("arrowblue", "images/selectarrowblue.png");
      this.load.image("xbutton", "images/xbuttonpink.png");
      this.load.image("loadinggif", "images/fading.gif");
      this.load.video("loadinganimation", "images/fading.mp4", true);
      this.load.image("pixelgif", "images/pixeltimebutlilguy7.gif");
      this.load.audio("sombersong", "sounds/somber.wav");
   }

   create() {
      this.input.on('pointerdown', () => {this.scene.start('splash')});
      //how to center text: https://www.stephengarside.co.uk/blog/phaser-3-center-text-in-middle-of-screen/
      const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
      const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
      let textA = this.add.text(screenCenterX, screenCenterY,
         "Press anywhere to start",
         {
            font: "36px Finger Paint",
            color: "#fcfcfc"
         }
      );
      textA.setOrigin(0.5);
      textA.setWordWrapWidth(700);
   }
}

class Splash extends Phaser.Scene {
   constructor() {
      super('splash');
   }
   create() {
      let sfx = this.sound.add("cheeryintrosong", {loop: false});

      const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
      const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
      this.add.image(screenCenterX, screenCenterY+.5, "rosiesunnybackground");
      this.graphics = this.add.graphics();
      //funny textbox backgrounds!!
      //hex to color conversion https://rexrainbow.github.io/phaser3-rex-notes/docs/site/color/
      this.graphics.fillStyle(Phaser.Display.Color.HexStringToColor("#150019").color);
      let darkrectangle = this.graphics.fillRect(200, -50, 490, 140); //topleft x, topleft y, width, height
      darkrectangle.setAlpha(0); 
      this.tweens.add({
         targets: darkrectangle,
         y: 175,
         duration: 800,
         delay: 4300,
         ease: "Quad.out",
         alpha: 0.79,
      });
      this.graphics = this.add.graphics();
      this.graphics.fillStyle((Phaser.Display.Color.HexStringToColor("#FFFFFF").color));
      let lightrectangle = this.graphics.fillRect(200, 70, 490, 20);
      lightrectangle.setAlpha(0); 
      this.tweens.add({
         targets: lightrectangle,
         y: 175,
         duration: 800,
         delay: 4300,
         ease: "Quad.out",
         alpha: 0.79,
      });
      let rosiesunnygamestitletext = this.add.image(500, -526, "rosiesunnygames");
      rosiesunnygamestitletext.setAlpha(0);//start off transp
      rosiesunnygamestitletext.setScale(.25);
      this.tweens.add({
         targets: rosiesunnygamestitletext,
         y: 185,
         duration: 800,
         delay: 4300,
         ease: "Quad.out",
         alpha: 0.79,
      });

      //logo that bounces with the text boxes appearing!
      let rosiesunnylogoimg = this.add.image(164, -526, "rosiesunnylogo");
      rosiesunnylogoimg.setAlpha(0);//start off transp
      //setscale https://stackoverflow.com/questions/56220214/how-to-correctly-resize-images-to-retain-quality-in-phaser-3
      rosiesunnylogoimg.setScale(.55);
      this.tweens.add({
         targets: rosiesunnylogoimg,
         y: 236,
         alpha: 1,
         duration: 800,
         delay: 4300,
         ease: "Quad.out"
      });
      this.tweens.add({
         targets: rosiesunnylogoimg,
         y: 210,
         duration: 500,
         delay: 5000,
         ease: "Back.out"
      });

      let cloudimg = this.add.image(screenCenterX+120, 950, "cloud");
      cloudimg.setAlpha(0);//start off transp
      cloudimg.setScale(.75);
      this.tweens.add({
         targets: cloudimg,
         y: 390,
         alpha: .7,
         duration: 800,
         delay: 6000,
         ease: "Quad.out"
      });
      this.tweens.add({
         targets: cloudimg,
         y: 400,
         duration: 500,
         delay: 6500,
         ease: "Back.out"
      });

      let rosiensunnypixels = this.add.image(screenCenterX+120, 950, "rosieandsunnypixels");
      rosiensunnypixels.setAlpha(0);//start off transp
      rosiensunnypixels.setScale(.75);
      this.tweens.add({
         targets: rosiensunnypixels,
         y: 390,
         alpha: 1,
         duration: 800,
         delay: 6000,
         ease: "Quad.out"
      });
      this.tweens.add({
         targets: rosiensunnypixels,
         y: 400,
         duration: 500,
         delay: 6500,
         ease: "Back.out"
      });
      this.tweens.add({
         targets: rosiensunnypixels,
         y: 360,
         duration: 800,
         delay: 7300,
         ease: "Bounce.in"
      });
      this.tweens.add({
         targets: rosiensunnypixels,
         y: 400,
         duration: 800,
         delay: 7900,
         ease: "Bounce.out"
      });
      this.graphics = this.add.graphics();
      this.graphics.fillStyle(Phaser.Display.Color.HexStringToColor("#150019").color);
      let exitscreen = this.graphics.fillRect(-500, -500, 1500, 1500); //topleft x, topleft y, width, height
      exitscreen.setAlpha(0); 
      this.tweens.add({
         targets: exitscreen,
         duration: 1000,
         delay: 9500,
         ease: "linear",
         alpha: 1,
      });

      this.tweens.add({
         targets: 'titlescreen',
         alpha: 1,
      })

      


      //https://labs.phaser.io/edit.html?src=src/scenes/launch%20parallel%20scene.js
      this.time.delayedCall(700, () => {sfx.play()});
      this.time.delayedCall(11000, () => {this.scene.start('titlescreen')});
      this.input.on('pointerdown', () => {
         sfx.stop();
         let sfxonclick = this.sound.add("menuclicksound", {loop: false});
         sfxonclick.play();
         this.graphics = this.add.graphics();
         this.graphics.fillStyle(Phaser.Display.Color.HexStringToColor("#150019").color);
         let exitscreen = this.graphics.fillRect(-500, -500, 1500, 1500); //topleft x, topleft y, width, height
         exitscreen.setAlpha(0); 
         this.tweens.add({
            targets: exitscreen,
            duration: 1000,
            ease: "linear",
            alpha: 1,});
         //https://phaser.discourse.group/t/delay-creation/1254
         this.time.delayedCall(800, () => {this.scene.start('titlescreen')});
      });
   }
   update() {   
   }
}






class TitleScreen extends Phaser.Scene {
   constructor() {
      super('titlescreen');
   }
   
   create() {
      let mainmenusong = this.sound.add("mainmenuthemesong", {loop: true});
      let buttonappearnoises = this.sound.add("menuticks", {loop: false});
      this.graphics = this.add.graphics();
      this.graphics.fillStyle(Phaser.Display.Color.HexStringToColor("#150019").color);
      let exitscreen = this.graphics.fillRect(-500, -500, 1500, 1500); //topleft x, topleft y, width, height
      const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
      const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
      let titlescreenbg = this.add.image(screenCenterX, 1500, "aaa");
      titlescreenbg.setAlpha(0);//start off transp
      this.tweens.add({
         delay: 300,
         targets:  titlescreenbg,
         y: screenCenterY+.5,
         duration: 1500,
         ease: "Linear",
      })
      this.tweens.add({
         targets:  titlescreenbg,
         delay: 800,
         duration: 1800,
         ease: "Linear",
         alpha: 1,
      })

      let kindreregardstitletext = this.add.image(330, -100, "kindredregardstitle");
      kindreregardstitletext.setAlpha(0);//start off transp
      kindreregardstitletext.setScale(.37);
      this.tweens.add({
         targets: kindreregardstitletext,
         y: 70,
         alpha: 1,
         duration: 500,
         delay: 2100,
         ease: "Back.out"
      });

      let option1 = this.add.image(50-120, 280, "arrowwhite");
      option1.setScale(.70);
      option1.setOrigin(0, 0.5);
      option1.setAlpha(0);//start off transp
      this.tweens.add({
         targets: option1,
         x: 50,
         alpha: 1,
         duration: 500,
         delay: 2100+700,
         ease: "Back.out"
      });
      let option2 = this.add.image(50-120, 280+80, "arrowpink");
      option2.setScale(.70);
      option2.setOrigin(0, 0.5);
      option2.setAlpha(0);//start off transp
      this.tweens.add({
         targets: option2,
         x: 50,
         alpha: 1,
         duration: 500,
         delay: 2100+700*2,
         ease: "Back.out"
      });
      let option3 = this.add.image(50-120, 280+160, "arrowpink");
      option3.setScale(.70);
      option3.setOrigin(0, 0.5);
      option3.setAlpha(0);//start off transp
      this.tweens.add({
         targets: option3,
         x: 50,
         alpha: 1,
         duration: 500,
         delay: 2100+700*3,
         ease: "Back.out"
      });
      
      let option1text = this.add.text(130-200, 280,
         "Continue",
         {
            font: "30px Finger Paint",
            color: "#fcfcfc",
            backgroundColor: "#380143",
         }
      );
      option1text.setWordWrapWidth(700);
      option1text.setOrigin(0, 0.5);
      option1text.setAlpha(0);//start off transp
      this.tweens.add({
         targets: option1text,
         x: 130,
         alpha: 1,
         duration: 500,
         delay: 2100+700,
         ease: "Back.out"
      });

      let option2text = this.add.text(130-200, 280+80,
         "New Game",
         {
            font: "30px Finger Paint",
            color: "#fcfcfc",
            backgroundColor: "#380143",
         }
      );
      option2text.setOrigin(0, 0.5);
      option2text.setWordWrapWidth(700+700*2);
      option2text.setAlpha(0);//start off transp
      this.tweens.add({
         targets: option2text,
         x: 130,
         alpha: 1,
         duration: 500,
         delay: 2100+700*2,
         ease: "Back.out"
      });

      let option3text = this.add.text(130-200, 280+160,
         "Options",
         {
            font: "30px Finger Paint",
            color: "#fcfcfc",
            backgroundColor: "#380143",
         }
      );
      option3text.setOrigin(0, 0.5);
      option3text.setWordWrapWidth(700);
      option3text.setAlpha(0);//start off transp
      this.tweens.add({
         targets: option3text,
         x: 130,
         alpha: 1,
         duration: 500,
         delay: 2100+700*3,
         ease: "Back.out"
      });

      let xbutton = this.add.image(700, 35, "xbutton");
      xbutton.setScale(.70);
      xbutton.setOrigin(0.5);
      xbutton.setAlpha(0);//start off transp
      this.tweens.add({
         targets: xbutton,
         alpha: 1,
         duration: 500,
         delay: 2100+700*4,
         ease: "Back.out"
      });
      
      this.time.delayedCall(2100+700, () => {buttonappearnoises.play()});
      this.time.delayedCall(2100+700*2, () => {buttonappearnoises.play()});
      this.time.delayedCall(2100+700*3, () => {buttonappearnoises.play()});

      this.time.delayedCall(900, () => {mainmenusong.play()});


      this.input.on('pointerdown', () => {
         mainmenusong.stop();
         let sfxonclick = this.sound.add("menuclicksound", {loop: false});
         sfxonclick.play();
         let fadeovermenuscreen = this.add.image(screenCenterX, screenCenterY+.5, "aaa");
         fadeovermenuscreen.setAlpha(0);//start off transp
         this.tweens.add({
            targets: fadeovermenuscreen,
            alpha: 1,
            duration: 800,
            ease: "Quad.out"
         });
         this.time.delayedCall(800, () => {this.scene.start('loadingscreentm')});
      })
   }
   update() {   
   }
}


class LoadingScreen extends Phaser.Scene {
   constructor() {
      super('loadingscreentm');
   }
   create() {
      let loadingmusic = this.sound.add("loadingsong", {loop: false});
      this.time.delayedCall(700, () => {loadingmusic.play()});
      const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
      const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
      this.add.image(screenCenterX, screenCenterY+.5, "aaa");
      let fadeovermenuscreen = this.add.image(screenCenterX, screenCenterY+.5, "loadinggif");
         fadeovermenuscreen.setAlpha(0);//start off transp
         this.tweens.add({
            targets: fadeovermenuscreen,
            alpha: 1,
            duration: 800,
            delay: 500,
            ease: "Quad.out"
         });
         //I wanted to put my animated gif here but phaser despises gifs and only plays the first frame so it's gonna be not animated yet 
         // I'll make it into a spritesheet some other time to make it work :/
      let animatedspritebutnotyet = this.add.image(140, 380, "pixelgif");
      animatedspritebutnotyet.setAlpha(0);//start off transp
      animatedspritebutnotyet.setScale(.45);
      this.tweens.add({
         targets: animatedspritebutnotyet,
         duration: 800,
         delay: 500,
         ease: "Quad.out",
         alpha: 1,
      });

      let loadingtext = this.add.text(140, 400,
         "Loading...",
         {
            font: "30px Finger Paint",
            color: "#fcfcfc",
         }
      );

      loadingtext.setWordWrapWidth(700);
      loadingtext.setOrigin(0.5);
      loadingtext.setAlpha(0);//start off transp
      this.tweens.add({
         targets: loadingtext,
         x: 130,
         alpha: 1,
         duration: 800,
         delay: 500,
         ease: "Back.out"
      });

      this.time.delayedCall(20000, () => {loadingmusic.stop()});
      this.time.delayedCall(20000, () => {
         let sfxonclick = this.sound.add("menuclicksound", {loop: false});
         sfxonclick.play();
         this.graphics = this.add.graphics();
         this.graphics.fillStyle(Phaser.Display.Color.HexStringToColor("#150019").color);
         let exitscreen = this.graphics.fillRect(-500, -500, 1500, 1500); //topleft x, topleft y, width, height
         exitscreen.setAlpha(0); 
         this.tweens.add({
            targets: exitscreen,
            duration: 1000,
            ease: "linear",
            alpha: 1,});
      });
      this.time.delayedCall(21000, () => {this.scene.start('monologue')});
      this.input.on('pointerdown', () => {
         loadingmusic.stop();
         let sfxonclick = this.sound.add("menuclicksound", {loop: false});
         sfxonclick.play();
         this.graphics = this.add.graphics();
         this.graphics.fillStyle(Phaser.Display.Color.HexStringToColor("#150019").color);
         let exitscreen = this.graphics.fillRect(-500, -500, 1500, 1500); //topleft x, topleft y, width, height
         exitscreen.setAlpha(0); 
         this.tweens.add({
            targets: exitscreen,
            duration: 1000,
            ease: "linear",
            alpha: 1,});
         this.time.delayedCall(800, () => {this.scene.start('monologue')});
      });
   }
   update() {    
   }
}


class Monologue extends Phaser.Scene {
   constructor() {
      super('monologue');
   }
   create() {
      const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
      const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
      let sombermusic = this.sound.add("sombersong", {loop: false});
      this.time.delayedCall(700, () => {sombermusic.play()});
      this.graphics = this.add.graphics();
      this.graphics.fillStyle(Phaser.Display.Color.HexStringToColor("#150019").color);
      let exitscreen = this.graphics.fillRect(-500, -500, 1500, 1500); //topleft x, topleft y, width, height
      let textA = this.add.text(screenCenterX, screenCenterY,
         "Swallowing your grief doesn’t work so good.\n\nDo you know about what happens when you do?\n\nMy mom told me that a nasty seed sprouts right there in your tummy and it grows and grows until it swallows you whole. \n\nShe knew a lot of stuff like that. \n\nI miss her sometimes. We lost her without even noticing it was happening. \n\nMaybe she just let the nasty seed eat her up.",
         {
            font: "24px Finger Paint",
            color: "#fcfcfc"
         }
      );
      textA.setOrigin(0.5);
      textA.setWordWrapWidth(700);
   }

   update() {    
   }
}
