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
