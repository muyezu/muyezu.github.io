function barrier() {
  this.velocity = 1;
  this.height = 100;
  this.width = 300;
  this.a = 1356 + this.width; //X AXIS
  this.b = Math.floor((Math.random() * h) - this.width); //Y AXIS

  this.show = function() {
  fill(color('blue'));    
  rect(this.a, this.b, this.height, this.width);
  if (this.a > 0) {
  this.velocity ++;
  }
  else {}

  if (this.a < 0) {
    this.velocity = 0;
    this.a = 1356 + this.width;
    this.b = Math.floor((Math.random() * h) - this.width); 
    score += 1;
  }
    this.a -= this.velocity;
  }
  this.update = function() {
    if(this.a < 0) {
    this.velocity === 0;
    this.b === Math.floor((Math.random() * h) - this.width); //Y AXIS
    this.a === 1300 + this.width; //X AXIS
    }
    }
  }
