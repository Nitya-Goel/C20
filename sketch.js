var fr, mr;

function setup() {
  createCanvas(800,400);
 fr= createSprite(200, 200, 50, 80);
 fr.shapeColor="blue";
 mr=createSprite(400, 200, 70, 50);
 mr.shapeColor="blue";
}


function draw() {
  background(255,255,255); 
  
  mr.x= World.mouseX;
  mr.y= World.mouseY;
  
  console.log(mr.x - fr.x);
  if(mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x <mr.width/2 + fr.width/2 && mr.y- fr.y < mr.height/2 + fr.height/2 && fr.y - mr.y < fr.height/2 + mr.height/2) {
    mr.shapeColor = "pink";
    fr.shapeColor = "pink";
  }
  else{
    fr.shapeColor = "blue";
    mr.shapeColor = "blue";
  }
  drawSprites();
}