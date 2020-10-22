/*  **********************************************************
    **      BEGIN klasse Vijand bij voorbeeld Levels        **
    ********************************************************** */


class Vijand {
  constructor(l) {
      this.x = canvas.width - 100;
      this.y = random(100,canvas.height - 100);
      this.d = 50;
      this.v = 3 + random (3*l);
      this.kleur = 'blue';
  }

  beweeg() {
    this.x -= this.v;
  }

  raakt(s) {
      if (dist(this.x,this.y,s.x,s.y) <= (this.d + s.d) / 2) {
          return true;
      }
      else {
          return false;
      }
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
    **       EINDE klasse Vijand bij voorbeeld Levels       **
    ********************************************************** */