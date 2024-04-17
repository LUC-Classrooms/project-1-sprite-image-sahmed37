/**
 * Project 1 - Interactive Image
 * Name: Sofia Ahmed
 * Comments: 
 */

// Global Variables go here
var y=150
var x= 200
var ySpeed, xSpeed

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  x = width / 2
  y = height / 2
  xSpeed = random(1, -1)
  ySpeed = random(1, -1)
}

function drawOld() {
  background(100,100);
  push();
  translate(x, y);

  // add your drawing code here ...
 fill(260, 280, 150)
 strokeWeight(3)
 line(x,y,x-10,y-35)
 line(x,y,x+20,y-30)
  ellipse(x, y, 50 ,50)
  fill("green")
  ellipse(x-50,y,50)
  ellipse(x-100, y, 50)
  ellipse(x-150, y, 50)
  ellipse(x-200, y, 50)
  strokeWeight(5)
  point(x-10,y-5)
  point(x+10,y+5)
  pop();
}// end of draw


  
  // this function runs again and again (60x per second)
 
  
  // add your image drawing code here
  

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
function draw() {
  x = x + xSpeed;
  y += ySpeed;

  if(x > width || x < 0){
    xSpeed = xSpeed * -1;
  }
  if(y > height || y < 0){
    ySpeed = ySpeed *-1
  }
  push()
  translate(x,y);
  if(mouseIsPressed ===true){
    background(0, 200, 250)
    fill('#fae')
    line(-25, -30, 0, 0)
    line(25, -30, 0, 0)
    ellipse(-35, 45, 50, 55)
    ellipse(-30, 90, 60, 55)
    ellipse(35, 45, 50, 55)
    ellipse(30, 90, 60, 55)
    ellipse(0, 50, 40, 150)
  
    strokeWeight(3)
    point(-5, -10)
    point(5, -10);
    rectMode(CENTER);
   
  } else{
    background(100,100);

    background(100,100);
    strokeWeight(3)
    line(0,0,-10,-35)
    line(0,0,20,-30)
    fill("green")
    ellipse(0, 0, 50 ,50)
    ellipse(-50,0,50)
    ellipse(-100, 0, 50)
    ellipse(-150, 0, 50)
    ellipse(-200, 0, 50)
    strokeWeight(5)
    point(-10,-5)
    point(10,5)
    }
    pop();
  }
    // do something here if the mouse is NOT pressed
  


/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  xSpeed = random (-2, 2);
  ySpeed = random (-2, 2);
  // add code here if you want something to execute once each time the mouse is pressed
}