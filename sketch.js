var bg1,bg2,form,system,code,scan;
var score=0;
var answer1 = "NAME";
var answer2 = "AGE";
var answer3 = "WET";

function preload() {
  bg1 = loadImage("./assets/Background.jpg");
  bg2 = loadImage("./assets/Background2.jpg");
}

function setup() {
  createCanvas(1000,500);
  scan = new Scan();
  system = new System();
}

function draw() {
  if(score<3){
    background(bg1);
    questions1();
    scan.display();
  }
  if(score == 3){
    background(bg2);
    questions2();
    scan.showButtons();
    answer1 = "TIGER";
    answer2 = "ASIA";
    answer3 = "EAST";
    scan.display();
  }

  if(score==6){
    background("white");
  }
  textSize(40);
  fill("black");
  text("Score: " + score, 650, 50);


  drawSprites()
}