
function setup() {
  createCanvas(1500,740);
ball = createSprite(400,300,40,40)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
ball.x=ball.x+5
  }
if (keyIsDown(LEFT_ARROW)){
  ball.x=ball.x-5
}
if (keyIsDown(UP_ARROW)){
  ball.y=ball.y-5
}
if (keyIsDown(DOWN_ARROW)){
  ball.y=ball.y+5
}
drawSprites()
}




