function jumper() {
    this.gravity = 10; //the force of gravity
    this.lift = -20; //opposing force
    this.velocity = 0; //speed of gravity
    this.x = 50;
    this.y = 30;
    this.show = function() {
    fill(color('red'));
    rect(this.x, this.y, 50, 50);
    }
    this.move = function() {
    if (keyIsDown(87) && (this.y > 0)) {
    this.y += this.lift;
    }
    if ((keyIsDown(68)) && (this.x < 1356)) {
    this.x -= this.lift; //LEFT
    }
    
    if ((keyIsDown(65)) && (this.x > 0)) {
    this.x += this.lift; //RIGHT
    }
 }
    this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9;
    if(this.y > h) {
    this.y = h;
    }
    if(this.y > 0) {
    this.velocity = 0;
    }
    if(this.x > w) {
    this.x = w;
    }
    if(this.x > 0) {
    this.velocity = 0;
    }
    }
}