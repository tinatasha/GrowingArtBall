function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
}

let angle = 0;
let xPos = 0;


function draw() {
  
  
  translate(width/2, height/2)
  
  

  rotate(angle);
  stroke('black');
  strokeWeight(5);
  point(xPos, 0);
  
  angle += 95
  xPos+=0.9
  
  if(xPos > width/2){
    xPos*=-1;
  }

 
  
}