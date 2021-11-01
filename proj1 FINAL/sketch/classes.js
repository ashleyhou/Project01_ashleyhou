class Ghost {
    constructor(x, y, alpha) {
        this.x = x;
        this.y = y;
        this.alpha = alpha;
    }
    display() {
        noStroke();
        rectMode(CORNER);
        //fill(lerpColor(color(255, 255, 255), color(0, 0, 0), .15));
        fill(255, 200);
        point(this.x - 50, this.y);
        point(this.x, this.y - 50);
        point(this.x + 50, this.y);
        //curveTightness(-1);
        beginShape();
        curveVertex(this.x-50, this.y);
        curveVertex(this.x-50, this.y);
        curveVertex(this.x - 42, this.y - 25);
        curveVertex(this.x - 25, this.y - 42);
        curveVertex(this.x, this.y - 50);
        curveVertex(this.x + 25, this.y - 42);
        curveVertex(this.x + 42, this.y - 25);
        curveVertex(this.x + 50, this.y);
        curveVertex(this.x + 50, this.y);
        endShape();
        //ellipse(this.x, this.y, 100, 100);
        rect(this.x-50, this.y, 100, 100);
        for(let i = 0; i < 100; i += 20){
            fill(backgroundColor, this.alpha);
            ellipse(this.x-40 + i, this.y + 100, 20, 20);
        }
        fill(0);
        ellipse(this.x - 20, this.y, 15, 20);
        ellipse(this.x + 20, this.y, 15, 20);
    }
}

class Body {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    display() {
        noStroke();
        ellipse(this.x, this.y )
    }
}

class Building {
    constructor(x, y, w, h, g, b) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.g = g;
        this.b = b;
    }
    display() {
        rectMode(CORNER);
        noStroke();
        fill(14, 30, this.g); //have g replace the green
        rect(this.x, this.y, this.w, this.h);
        fill(255, 239, this.b);
        for (let i = 10; i < this.w-10; i += 15) {
            for (let j = 10; j < this.h; j += 15) {
//                if (mouseX >= this.x && mouseX <= this.w+this.x && mouseY >= this.y && mouseY <= this.h+this.y) {
//                    fill(0);
//                }
                rect(this.x+i, this.y+j, 5, 5);
            }
        }
    }
    drawTop() {
        fill(14, 30, this.g);
        //rect(this.x + 15, this.y - (this.h/2), this.w - 30, this.h/2);
        //rect(this.x+15, this.y-(this.h/2), this.w-30,);
        triangle(this.x, this.y, this.x + this.w/2, this.y - 60, this.x+this.w, this.y);
    }
}

class Light {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    display() {
        noStroke();
        let b = random(125, 190);
        fill(255, b, 28, 80);
        for (let i = 0; i < 40; i += 10) {
            ellipse(this.x, this.y, 1 + i, 1 + i);
        }
    }
}

class Person {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    display() {
        fill(0);
        noStroke();
        ellipse(this.x + 400, this.y + 310, this.size + 70, this.size + 70);
        ellipse(this.x + 400, this.y + 400 + this.size, this.size + 100, this.size + 100);
        rectMode(CORNER);
        rect(this.x + (400- (100+this.size)/2), this.y + this.size + 400, this.size + 100, this.size + 150);
        rectMode(CENTER);
        rect(this.x + 400, this.y + 325, this.size/4 +25, 50);
    }
}

class Fuzz {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    display() {
        stroke(255);
        strokeWeight(1);
        if (this.x > width/2 && this.y > height/2) {
            line(this.x, this.y, this.x + xMove, this.y + yMove);
        }
        else if (this.x > width/2 && this.y < height/2) {
            line(this.x, this.y, this.x + xMove, this.y - yMove);
        }
        else if (this.x < width/2 && this.y < height/2) {
            line(this.x, this.y, this.x - xMove, this.y - yMove);
        }
        else if (this.x < width/2 && this.y > height/2){
            line(this.x, this.y, this.x - xMove, this.y + yMove);
        }
        else if (this.y == height/2) {
            line(this.x, this.y, this.x + xMove, this.y);
        }
        else if (this.x == width/2) {
            line(this.x, this.y, this.x, this.y + yMove)
        }
    }
}

