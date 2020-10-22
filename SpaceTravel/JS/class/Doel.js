class Doel {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.kleur = 255;
        this.geraakt = 0;
        this.wordtGeraakt = false;
        this.schaal = 7;
        this.stap = 3;
        this.bepaalDiameter();
        this.beweeg();
    }

    bepaalDiameter() {
        if (canvas.height > canvas.width) {
            this.diameter = canvas.width / this.schaal;
        }
        else {
            this.diameter = canvas.height / this.schaal;
        }
        this.straal = this.diameter / 2;
    }
    beweeg() {
        if (keyIsDown(UP_ARROW))
    {
      this.y -= this.stap;
    }
    if (keyIsDown(DOWN_ARROW))
    {
      this.y += this.stap;
    } 
}

    raakt(bal) {
        if (dist(this.x,this.y,bal.x,bal.y) < (this.straal + bal.straal)) {
            return true;
        }
    }

    teken() {
        push();
        fill(this.kleur);
        translate(this.x,this.y);
        var l = this.diameter / 2;
        octo(0,l/2,l,2);
        fill(50);
        text(this.geraakt,0,0);
        pop();
    }    
}