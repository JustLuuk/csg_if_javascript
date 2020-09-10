var speed = 5;
var bol = {
    X: 225,
    Y: 225,
    D: 50,


    beweeg() {
        if (keyIsDown(LEFT_ARROW)) {
            this.X -= speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.X += speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.Y -= speed;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.Y += speed;
        }
        this.X = constrain(this.X, this.D / 2, canvas.width - this.D / 2);
        this.Y = constrain(this.Y, this.D / 2, canvas.width - this.D / 2);
    },
    teken() {
        fill('blue');
        noStroke();
        ellipse(this.X, this.Y, this.D);
    }
}
var bol2 = {
    X: 225,
    Y: 225,
    D: 50,



    beweeg() {
        if (keyIsDown(65)) {
            this.X -= speed;
        }
        if (keyIsDown(68)) {
            this.X += speed;
        }
        if (keyIsDown(87)) {
            this.Y -= speed;
        }

        if (keyIsDown(83)) {
            this.Y += speed;
        }
        this.X = constrain(this.X, this.D / 2, canvas.width - this.D / 2);
        this.Y = constrain(this.Y, this.D / 2, canvas.width - this.D / 2);
    },
    teken() {
        fill('red');
        noStroke();
        ellipse(this.X, this.Y, 50, 50);
    }
}

function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.parent('processing');

}
function draw() {
    background('silver');
    bol.beweeg();
    bol.teken();
    bol2.beweeg();
    bol2.teken();

}


