function barrier() {
this.velocity = 10;
this.height = 100;
this.width = 300;
this.a = 1356 + this.width; //X AXIS
this.b = Math.floor((Math.random() * h) - this.width); //Y AXIS
this.show = function() {
fill(color('blue'));    
rect(this.a, this.b, this.height, this.width);
this.a -= this.velocity;
}
this.update = function() {
  if(this.a < 0 - 300) {
  this.velocity === 0;
  this.b === Math.floor((Math.random() * h) - this.width); //Y AXIS
  this.a === 1356 + this.width; //X AXIS
  }
  }
}
