var font;
var vehicles = [];
var randomSize = [];
var r = []
var g = []
var b = []
var backGrndColor = 0;
var arrived = true;

function preload()
{
  font = loadFont('Pecita.otf');
  for(var i = 0; i < 280; i++)
  {
    randomSize.push(random(1, 8));
  }
  
  for(var i = 0; i < 280; i++)
  {
    r.push(random(50, 255));
  }
  for(var i = 0; i < 280; i++)
  {
    g.push(random(50, 255));
  }
  for(var i = 0; i < 280; i++)
  {
    b.push(random(50, 255));
  }
}

function setup()
{
  createCanvas(600, 300);
  background(backGrndColor);
  
  var points = font.textToPoints('Sun', 70, 200, 192);
  for (var i = 0; i < points.length; i++)
  {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw()
{
  background(backGrndColor);
  for (var i = 0; i < vehicles.length; i++)
  {
    var v = vehicles[i];
    
    v.behaviors();
    v.update();
    v.show(randomSize[i], r[i], g[i], b[i]);
  }
  
  stroke(255, 212, 40);
  strokeWeight(2);
  noFill();
  ellipse(mouseX,mouseY,50,50);
}

function whatever()
{

}