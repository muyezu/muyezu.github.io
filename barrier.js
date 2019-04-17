function barrier() {
  this.velocityB = 1;
  this.height = 100;
  this.width = 300;
  this.a = 1356 + this.width; //X AXIS
  this.b = Math.floor((Math.random() * h) - this.width); //Y AXIS

  this.show = function() {
  fill(color('blue'));    
  rect(this.a, this.b, this.height, this.width);
  if (this.a > 0) {
  this.velocityB ++;
  }
  else {}

  if (this.a < 0) {
    this.velocityB = 0;
    this.a = 1366 + this.width;
    this.b = Math.floor((Math.random() * h) - this.width); 
    score += 1;
  }
    this.a -= this.velocityB;
  }
  this.update = function() {
    if(this.a < 0) {
    this.velocityB === 0;
    this.b === Math.floor((Math.random() * h) - this.width); //Y AXIS
    this.a === 1300 + this.width; //X AXIS
    }
    }
  }
