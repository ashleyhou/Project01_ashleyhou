let ghost1;
let mX;
let mY;
let backgroundColor;
let yInc, wInc, hInc, fallInc, upInc;

let increment1 = 0;
let increment2 = 0;
let moveY = 100;
let sizeInc = 0;

let xMove, yMove, index;
let fuzzArr = [];
function setup() {
    createCanvas(1000, 600);
    backgroundColor = 0;
    yInc = 0;
    wInc = 0;
    hInc = 0;
    fallInc = 0;
    upInc = -100;
    
    xMove = 5;
    yMove = 5;
    index = 0;
    for (let i = 0; i < 1000; i += 10) {
        for (let j = 0; j < 600; j += 10) {
            fuzzArr[index++] = new Fuzz(i, j);
        }
    }
}

function draw() {
    if (millis() > 11000) {
        scene3();
    }
    else if (millis() > 7000) {
        scene2();
    }
    else{
        scene1();
    }
}

function scene1(){
    background(0);
    for (let i = 0; i < fuzzArr.length; i++) {
        fuzzArr[i].display();
    }
    mX = map(mouseX, 0, width, 300, 578);
    mY = map(mouseY, 0, height, 173, 340);
    ghost1 = new Ghost(mX, mY, 0);
    
    tvCorner();
    tvColors();
    ghost1.display();
    
    
    
}

function scene2() {
    background(0);
    noStroke();
    fill(255);
    ellipse(width/4, height/2, 300, 150);
    ellipse(3*width/4, height/2, 300, 150);
    fill(66, 46, 15);
    ellipse(width/4, height/2, 150, 150);
    ellipse(3*width/4, height/2, 150, 150);
    fill(0);
    ellipse(width/4, height/2, 90, 90);
    ellipse(3*width/4, height/2, 90, 90);
    fill(255);
    ellipse(width/4+20, height/2-20, 10, 10);
    ellipse(3*width/4+20, height/2-20, 10, 10);
    fill(75, 189, 250, 120);
    ellipse(width/4, height/2+75 - yInc, 80 + wInc, 20 + hInc);
    ellipse(3*width/4, height/2+75 - yInc, 80 + wInc, 20 + hInc);
    if (yInc < 30) {
        yInc+=.5;
        wInc+= 2.5;
        hInc+= .6;
    }
    if (yInc >= 30){
        ellipse(3*width/4 - 70, height/2+60 + fallInc, 20 , 30);
        fallInc += 5;
    }
}

function scene3() {
    background(52, 60, 120);
    drawMist1();
    drawSkyline2();
    drawMist2();
    let me = new Person(340, 100, -20);
    me.display();
    windowFrame();
}

function tvCorner() {
    rectMode(CORNER);
    noStroke();
    fill(40);
    rect(235, 110, 530, 380);
    fill(60);
    rect(250, 125, 500, 350);
    strokeWeight(3);
    stroke(100);
    line(width/2, height/2 - 190, 420, 65);
    line(width/2, height/2 - 190, 650, 45);
}

function tvColors() {
    noStroke();
    let tvArr = [color(255, 242, 0), color(0, 255, 242), color(255, 0, 238), color(26, 255, 0), color(255, 0, 0), color(0, 8, 255)];
    let index = 0;
    for (let i = 250; i < 750; i+= 50) {
        if (index < tvArr.length) {
            fill(tvArr[index]);
            index++;
        }
        else { index = 0; }
        rect(i, 125, 50, 350);
    }
}

function drawSkyline2() {
    //Building(x, y, w, h, g, b)
    //g between (50, 90);
    //b between (100, 180);
    buildA = new Building(120, 70, 120, 700, 50, 115);
    buildB = new Building(420, 170, 70, 700, 70, 180);
    buildC = new Building(220, 200, 160, 700, 90, 164);
    buildD = new Building(550, 100, 90, 700, 65, 100);
    buildE = new Building(380, 250, 190, 700, 82, 190);
    buildF = new Building(50, 120, 70, 700, 75, 130);
    buildG = new Building(340, 50, 60, 700, 60, 140);
    buildH = new Building(650, 200, 120, 700, 78, 177);
    buildI = new Building(0, 240, 90, 700, 65, 120);
    buildJ = new Building(720, 130, 110, 700, 90, 100);
    buildK = new Building(600, 10, 120, 700, 75, 180);
    buildL = new Building(830, 200, 200, 700, 50, 170);
    buildA.display();
    buildA.drawTop();
    buildB.display();
    buildG.display();
    buildC.display();
    buildK.display();
    buildE.display();
    buildE.drawTop();
    buildD.display();
    buildF.display();
    buildH.display();
    buildI.display();
    buildJ.display();
    buildJ.drawTop();
    buildL.display();
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

function windowFrame() {
    strokeWeight(50);
    stroke(0, 255);
    line(0, 0, width, 0);
    line(0, 0, 0, height);
    line(width, 0, width, height);
    line(0, height, width, height);
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
}
