function Vehicle(x,y)
{
  this.pos = createVector(x, y);
  this.target = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector();
  this.maxspeed = 10;
  this.maxforce = 2.2;
}

Vehicle.prototype.behaviors = function()
{
  var mouse = createVector(mouseX, mouseY);
  var drop = this.drop(mouse);
  var stop = this.stop(this.target);
  
  this.applyForce(stop);
  this.applyForce(drop);
}

Vehicle.prototype.applyForce = function(f)
{
  this.acc.add(f);
}

Vehicle.prototype.update = function()
{
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function(ranSize, r, g, b)
{
    stroke(r, g, b);
    strokeWeight(ranSize);
    point(this.pos.x, this.pos.y);
}

Vehicle.prototype.drop = function(target)
{
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if(d < 30)
  {
    return createVector(0, 3);
  }
}

Vehicle.prototype.stop = function(target)
{
  //var desired = p5.Vector.sub(target, this.pos);
  //var d = desired.mag();
  //var speed = this.maxspeed;
  ////if(d < 100)
  ////{
  ////  speed = map(d, 0, 100, 0, this.maxspeed);
  ////}
  //desired.setMag(speed);
  //var steer = p5.Vector.sub(desired, this.vel);
  //steer.limit(this.maxforce);
  //return steer;
}