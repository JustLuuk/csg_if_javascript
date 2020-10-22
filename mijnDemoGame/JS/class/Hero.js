/*  **********************************************************
    **       BEGIN klasse Hero bij voorbeeld Levels         **
    ********************************************************** */


class Hero {
  constructor(l) {
      this.x = 100;
      this.y = random(100,canvas.height - 100);
      this.d = 75;
      this.v = 3 + l;
      this.kleur = 'red';
  }

  beweeg() {
    if(keyIsDown(DOWN_ARROW)) {
        this.y += this.v;
    }
    if(keyIsDown(UP_ARROW)) {
        this.y -= this.v;
    }
    if(keyIsDown(LEFT_ARROW)) {
        this.x -= this.v;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        this.x += this.v;
    }       
    this.x += this.v;
  }

  teken() {
      push();
      noStroke();
      fill(this.kleur);
      ellipse(this.x,this.y,this.d);
      pop();
  }
}

/*  **********************************************************
    **       EINDE klasse Hero bij voorbeeld Levels         **
    ********************************************************** */