let x = 25
let y = 25

let raindown = 50

let rain = 10


let direction = 1
let bounce =1


let raindropx = [50, 160, 220, 270, 330]
let raindropy = [100, 105, 200, 165, 190]

function setup (){
  createCanvas(windowWidth, windowHeight);
  background(46,68,130)

  fill(186, 133, 67)
  ellipse(150,305,100, 15)

  fill(186, 133, 67)
  ellipse(150,330,100, 15)

  fill(112, 91, 65)
  rect(105,315, 90,10)

  fill(196, 181, 10)
  rect(100,310, 100,5)
}

function draw (){
  background(46,68,130)
  fill(173, 245, 95)
  ellipse(x,y,50,50)

  y += bounce

  x += direction

  if(y == windowHeight-25)
    bounce = -1

  if(y == 25)
    bounce =1

  if(x == windowWidth-25)
    direction = -1

  if(x == 25)
    direction = 1

  fill(101, 199, 192)
  ellipse(raindropx[0], raindropy[0], 10, 20)
  ellipse(raindropx[1], raindropy[1], 10, 20)
  ellipse(raindropx[2], raindropy[2], 10, 20)
  ellipse(raindropx[3], raindropy[3], 10, 20)
  ellipse(raindropx[4], raindropy[4], 10, 20)


  for (var i = 0; i<= 5; i++){
    raindropy[i]+=Math.random()*10
    if( raindropy[i] >= 1000){
      raindropy[i] = 50
    // raindropy[i] += rain
    }
  }

  raindropy[i] += rain
  if(raindown >= 1000)
    raindown = 50

  rotate()  
  fill(227, 205, 59)  
  rect(150, 50, 5, 200)

  
  fill(158, 158, 158)
  ellipse(200, 50, 300, 40)
  ellipse(550, 50, 200, 30)

  
}











































// class Star() {
//     constructor() {
//       this.x = random(0,width);
//       this.y= random(0,height);
//       this.z = random(0,width);
//     }
    
//     function update() {

//     }

//     function show() {
//       fill(255,255,255);
//       noStroke();
//       ellipse(x,y,8,8);
//     }
// }

// Star[] stars = new Star[100]

// function setup() {
//     createCanvas(400, 400);
//     for (var i = 0; i < stars.length; i++) {
//       stars[i] = new Star();
//     }

//   }

//   function draw() {
//     background(0);
//     // Your p5.js code goes here
//     for (var i = 0; i < stars.length; i++) {
//       stars[i].update();
//       stars[i].show();
//     }
//   }