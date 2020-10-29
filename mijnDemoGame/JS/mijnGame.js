function preload() {
    achtergrondmuziek = loadSound("sounds/bensound-groovyhiphop.mp3");
    startscherm = loadImage("images/startscreen.png");
    raket = loadImage("images/raket.png");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB,255,255,255,1);
    background(startscherm);
    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(50);
    spel = new SpaceTravel();
    spel.nieuwSpel();
}

function draw() {
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