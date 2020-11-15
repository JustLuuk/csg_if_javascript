var achtergrond;

function preload() {
    achtergrondmuziek = loadSound("sounds/Fade.mp3");
    boem = loadSound("sounds/explosie.mp3");
    check = loadSound("sounds/check.mp3");
    startscherm = loadImage("images/startscreen.png");
    raket = loadImage("images/raket.png");
    astro1 = loadImage("images/astro1.png");
    astro2 = loadImage("images/astro2.png");
    raketLangzaam = loadImage("images/raketLangzaam.png");
    raketNormaal = loadImage("images/raketNormaal.png");
    raketSnel = loadImage("images/raketSnel.png");
    aardemars = loadImage("images/aarde-mars.png");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB,255,255,255,1);

    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(50);
    spel = new SpaceTravel();
    spel.nieuwSpel();
}

function draw() {
       background(aardemars);
    if (spel.actief && !spel.levelGehaald) {
        spel.update();
    }
    spel.teken();
}

function keyTyped() {
  if (!spel.actief && !spel.levelGehaald) {
    // begin spel
    spel.actief = true;
    achtergrondmuziek.loop();
  }
  if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
    // level gehaald tijdens het spel
    spel.nieuwLevel();
  }
  if ((spel.afgelopen) && keyCode == 32) {
    // einde spel => 32 = ENTER 
    achtergrondmuziek.stop();
    spel.nieuwSpel();
  }  
  }
