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
x = width / 5
y = height / 2
xSpeed = random(1, -1)
ySpeed = random(1, -1)
}

function draw() {
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
}


  
  // this function runs again and again (60x per second)
  x = x + xSpeed;
  y += ySpeed;

  if(x > width || x < 0){
  xSpeed = xSpeed * -1;
  }
  if(y > height || y < 0){
    ySpeed = ySpeed *-1
  }
  
  
  // add your image drawing code here
  

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
function draw() {
  if(mouseIsPressed ===true){
    
    background(0, 200, 250)
    line(x-25, y-30, x, y)
    line(x+25, y-30, x, y)
    ellipse(x-35, y+45, 50, 55)
    ellipse(x-30, y+90, 60, 55)
    ellipse(x+35, y+45, 50, 55)
    ellipse(x+30, y+90, 60, 55)
    ellipse(x, y+50, 40, 150)
    fill('#fae')
    strokeWeight(3)
    point(x-5, y-10)
    point(x+5, y-10);
    rectMode(CENTER)
   
  } else{
     background(100,100);
    push();
    translate(x, y);
    pop();
    background(100,100);
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
  }
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