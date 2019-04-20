function barrier() {
  this.velocityB = 1;
  this.height = 100;
  this.width = 300;
  this.a = w + this.width; //X AXIS
  this.b = Math.floor((Math.random() * h) - this.width); //Y AXIS
  this.score = 0;

  this.show = function() {
  fill(color('blue'));    
  rect(this.a, this.b, this.height, this.width);
  if (this.a > 0) {
  this.velocityB ++;
  }
  else {}

  if (this.a < 0) {
    this.velocityB = 0;
    this.a = w + this.width;
    this.b = Math.floor((Math.random() * h) - this.width); 
    score += 1;
    document.getElementById('score').innerHTML = " This is your current Score " + score;
  }
    this.a -= this.velocityB;
  }
  this.update = function() {
    if(this.a < 0) {
    this.velocityB === 0;
    this.b === Math.floor((Math.random() * h) - this.width); //Y AXIS
    this.a === w + this.width; //X AXIS
    }
    }
  }
