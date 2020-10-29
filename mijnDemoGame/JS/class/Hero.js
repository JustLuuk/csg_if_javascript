/*  **********************************************************
    **       BEGIN klasse Hero bij voorbeeld Levels         **
    ********************************************************** */


class Hero {
    constructor(l) {
        this.x = 100;
        this.y = random(100, canvas.height - 100);
        this.d = 100;
        this.v = 3 + l;
    }

    beweeg() {
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.v;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.v;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.v;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.v;
        }
        this.x += this.v;
        this.x = constrain(this.x, 0, canvas.width);
        this.y = constrain(this.y, 0, canvas.height - 100);
    }

    teken() {
        push();
        noStroke();
        imageMode(CENTER)
        image(raket, this.x, this.y, this.d, this.d - 20);

        pop();
    }

}

/*  **********************************************************
    **       EINDE klasse Hero bij voorbeeld Levels         **
    ********************************************************** */