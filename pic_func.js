
class Circle {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
    circle(this.x, this.y, 50);
  }
}



class Ad {
  constructor(imgX, imgY,imgName) {
    this.imgX = imgX;
    this.imgY = imgY;
    this.imgName = imgName;
  }

  getX(imgX) {
    imgX = random(50, 450);
    return imgX;
  }

  getY(imgY)
  {
    return imgY;
  }


  setImage(imgName) {
    image(imgName, this.getX(), this.getY());
    image(close, 190 + this.getX(), this.getY());
  }
}
