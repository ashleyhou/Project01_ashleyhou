let increment1 = 0;
let increment2 = 0;
let moveY = 100;
let sizeInc = 0;
let count = 1;
function setup() {
  // put setup code here
    createCanvas(800, 500);
    background(52, 60, 120);
}

function draw() {
  // put drawing code here
    if (count == 1) {
        scene1();
    }
    
}

function scene1() {
    background(49, 56, 120);
    drawMist2();
    drawSkyline1();
    drawMist1();
    drawBackground();
    let me = new Person(0, moveY, sizeInc);
    if (moveY >= 0) {
        moveY-=.9;
        sizeInc -= .2;
        me.display();
    }
    me.display();
    count++;
}

function scene2() {
    background(49, 56, 120);
    drawSkyline2();
}

function drawSkyline1() {
    //Building(x, y, w, h, g, b)
    //g between (50, 90);
    //b between (100, 180);
    buildA = new Building(70, 70, 150, 400, 50, 115);
    buildB = new Building(400, 170, 100, 300, 70, 180);
    buildC = new Building(200, 200, 190, 400, 90, 164);
    buildD = new Building(600, 100, 120, 400, 65, 100);
    buildE = new Building(450, 250, 220, 400, 82, 190);
    buildF = new Building(0, 120, 100, 400, 75, 130);
    buildG = new Building(330, 50, 90, 400, 60, 140);
    buildH = new Building(700, 200, 150, 400, 78, 177);
    buildA.display();
    buildA.drawTop();
    buildB.display();
    buildG.display();
    buildC.display();
    buildE.display();
    buildE.drawTop();
    buildD.display();
    buildF.display();
    buildH.display();
}

function drawSkyline2() {
    //Building(x, y, w, h, g, b)
    //g between (50, 90);
    //b between (100, 180);
    buildA = new Building(70, 50, 150, 400, 50, 115);
    buildA.display();
}


function drawBackground() {
    fill(27, 32, 74);
    //noStroke();
    strokeWeight(1);
    stroke(255);
    beginShape();
    vertex(-1, height);
    vertex(-1, height-100);
    vertex(width/2, height-200);
    vertex(width, height-100);
    vertex(width, height);
    endShape();
}

function mist(x, y, opacity, thick) {
    noStroke();
    fill(255, opacity);
    ellipse(x, y, opacity*7, thick);
    increment1 += .2;
    increment2 += .2;
}

function mistRollOver() {
    if (increment1 > width) {
        increment1 *= -1;
    }
    if (increment2 > width*2) {
        increment2 *= -1;
    }
}

function drawMist1() {
    mist(70 + increment1, 50, 35, 35);
    mistRollOver();
    mist(150 + increment1, 80, 55, 20);
    mistRollOver();
    mist(700 + increment1, 80, 30, 20);
    mistRollOver();
    mist(300 + increment1, 200, 40, 25);
    mistRollOver();
    mist(785 + increment1, 150, 55, 30);
    mistRollOver();
    mist(400 + increment1, 115, 40, 22);
    mistRollOver();
    mist(690 + increment1, 115, 40, 22);
    mistRollOver();
}

function drawMist2() {
    mist(-70 + increment2, 200, 35, 35);
    mistRollOver();
    mist(-150 + increment2, 110, 55, 20);
    mistRollOver();
    mist(-700 + increment2, 30, 30, 20);
    mistRollOver();
    mist(-300 + increment2, 140, 40, 25);
    mistRollOver();
    mist(-785 + increment2, 70, 55, 30);
    mistRollOver();
    mist(-400 + increment2, 10, 40, 22);
    mistRollOver();
    mist(-690 + increment2, 90, 40, 22);
    mistRollOver();
}
