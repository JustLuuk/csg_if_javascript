var speed = 5;
var afstand;
var bol = {
    X: 250,
    Y: 250,
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
        fill('brown');
        noStroke();
        ellipse(this.X, this.Y, this.D, 100);
    }
}

var eiland = {
    X: 500,
    Y: 0,
    D: 200,
    geraakt(bol) {
        afstand=dist(this.X, this.Y, bol.X, bol.Y);
        if (afstand <= (this.D + bol.D)/2){
            fill('yellow');
        }
        else {
            fill ('green')
        }
    }
    ,teken() {

        ellipse(this.X, this.Y, this.D);
    }
}


function setup() {
    canvas = createCanvas(500, 500);
    canvas.parent('processing');

}
function draw() {
    background('blue');
    bol.beweeg();
    bol.teken();
    eiland.geraakt(bol);
    eiland.teken();

}


