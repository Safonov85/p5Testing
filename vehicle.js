function Vehicle(x,y)
{
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.maxspeed = 10;
  this.maxforce = 2.2;
}

Vehicle.prototype.behaviors = function()
{
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX + random(1, 7), mouseY + random(1, 7));
  var flee = this.flee(mouse);
  
  arrive.mult(2);
  flee.mult(2);
  
  this.applyForce(arrive);
  this.applyForce(flee);
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
    //stroke(random(0,255), random(0,255), random(0,255));
    //strokeWeight(random(2, 8));
    stroke(r, g, b);
    strokeWeight(ranSize);
    point(this.pos.x, this.pos.y);
}

Vehicle.prototype.arrive = function(target)
{
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if(d < 100)
  {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Vehicle.prototype.flee = function(target)
{
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if(d < 30)
  {
  desired.setMag(this.maxspeed);
  desired.mult(-1);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  steer.x += random(-2, 2);
  steer.y += random(-2, 2);
  //console.clear();
  //console.log(steer);
  return steer;
  }
  else
  {
    return createVector(0, 0);
    //console.log("else trigger");
  }
}