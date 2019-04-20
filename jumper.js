function jumper() {
    this.gravity = 10; //the force of gravity
    this.liftY = -20; //opposing force
    this.liftX = -20;
    this.x = 50;
    this.y = 30;

    this.show = function() {
    var r =  Math.floor((Math.random() * 256) - 0); 
    var g =  Math.floor((Math.random() * 256) - 0); 
    var b =  Math.floor((Math.random() * 256) - 0);     
    fill(color(r,g,b));
    rect(this.x, this.y, 50, 50);
    }
    this.move = function() {
    if (keyIsDown(87) && (this.y > 0)) {
    this.y += this.liftY; // W (UP)
    }
    if (keyIsDown(83) && (this.y < w)) {
    this.y -= this.liftY; // S (DOWN)
    }
    if ((keyIsDown(68)) && (this.x < w)) {
    this.x -= this.liftX; // D (RIGHT)
    }
    
    if ((keyIsDown(65)) && (this.x > 10)) {
    this.x += this.liftX; // A (LEFT)
    }
 }
    this.update = function() {
    this.y += this.gravity;
    if(this.y > h - 50) {
    this.y = h - 50;
    this.gravity = 0;
    }
    else {
    this.gravity = 10;
    }
    if(this.x > w - 50) {
    this.liftX = 0;
    this.x = w - 50;
    }
    else{
    this.liftX = -20;
    }
    }
}
