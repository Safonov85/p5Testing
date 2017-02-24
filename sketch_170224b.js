var font;
var vehicles = [];
var randomSize = [];
var r = []
var g = []
var b = []
var backGrndColor = 0;

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
  //textFont(font);
  //textSize(192);
  //fill(255);
  //noStroke();
  //text('TRAIN', 70, 200);
  
  var points = font.textToPoints('Sun', 70, 200, 192);
  //points = strokeWeight(2);
  
  for (var i = 0; i < points.length; i++)
  {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x +10, pt.y +10);
    vehicles.push(vehicle);
    //stroke(255);
    //strokeWeight(8);
    //point(pt.x, pt.y);
  }
  //console.log(vehicles.length);
  //for(var i = 0; i < 280; i++)
  //{
  //  console.log(randomSize[i]);
  //}
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
}