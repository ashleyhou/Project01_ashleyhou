int count;
int change;
int x, y;

void setup() {
  size(800, 800);
  background(0);
  count = 1;
  change = 0;
  x = 1;
  y = 1;
}

void draw() {
  if (count == 1 && mousePressed){
    brush1();
  }
  if (count == 2 && mousePressed){
    brush2();
  }
  if (count == 3 && mousePressed){
    brush3();
  }
  if (count == 4 && mousePressed){
    brush4();
  }
}

void drawShape(int x, int y, int size) {
  rectMode(CENTER);
  rect(x, y, size, size);
  rect(x-(size/5), y-(size/5), size, size);
  rect(x-(2*size/5), y-(2*size/5), size, size);
}

void brush1() {
  pushMatrix();
  //stroke(255, 0, 0);
  //fill(255, 10);
  translate(mouseX, mouseY);
  for (int i = 0; i < 10; i++) {
    rotate(radians(60));
    for (int j = 0; j < 100; j += 30){
      rotate(radians((mouseX+mouseY)/2));
      drawShape(i, j, 50);
      stroke(255, 20);
      fill(random(8*i, 8*j), random(8*i, 8*j), random(8*i, 8*j), 8);
    }
  }
  popMatrix();
}

void brush2(){
  pushMatrix();
  //stroke(255);
  fill(0, 10);
  translate(mouseX, mouseY);
  for (int i = 100; i > 0; i -= 25){
     for (int j = 0; j < 200; j += 50){
       change++;
       rotate(radians(change));
       strokeWeight(3);
       stroke((mouseX+mouseY)/2, mouseY/2, mouseX/2, j);
       drawShape(i, j, 20);
     }
  }
  popMatrix();
}

void brush3() {
  pushMatrix();
  //translate(mouseX, mouseY);
  //fill(0, 20);
  for (int i = 0; i <100; i += 17){
    for(int j = 0; j < 100; j+=30) {
      translate(mouseY, mouseX);
      rotate(random(TWO_PI));
      fill(mouseY/2, mouseX/2, (mouseX+mouseY)/2, 25);
      stroke(255, 60);
      //noStroke();
      drawShape(i, j, (i+j)/2);
      //drawShape(j, i, 20);
      change--;
    }
  }
  popMatrix();
}

void brush4(){
  pushMatrix();
  translate(mouseX, mouseY);
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < i; j += 2){
      stroke(0, 15);
      fill(mouseX+mouseY, (mouseX)/2, mouseX/3, 10);
      rotate(radians(mouseX));
      drawShape(i, j, mouseY/3);
      //drawShape(mouseX, mouseY, 50);
      //drawShape(mouseX-i, mouseY-j, mouseY/3);
      rotate(radians(mouseY));
      fill(mouseX/3, (mouseX+mouseY)/4, mouseY+mouseX, 10);
      drawShape(j, i, mouseX/3);
      //drawShape(i, j, mouseX%mouseY);
    }
  }
  popMatrix();
}

void keyPressed(){
  if (key == DELETE || key == BACKSPACE){
    background(0);
  }
  else if (key == 32){
    if (count > 3) {
      count = 1;
    }
    else {
      count++;
    }
    
  }
}