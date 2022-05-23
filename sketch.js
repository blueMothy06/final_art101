let myCanvas;
let num = 0;
let searchON = false;
let pause = false;
//let ram = random(50, 450);

//loading
let loadWidth = 20;

//ads
let horrorMov;
//let ghost;

// bgs
let title;
let endPage;
let first;
let com;
let load;
let home;
let results;
let compass
let amazing;

let myFont;
let mode = 'loading';

//buttons
let close;
let searchBut;
let heart;
let ad1;

// arrays


function preload() {
  myFont = loadFont('JosefinSans-Light.ttf');
  title = loadImage('assets/title.png');
  endPage = loadImage('assets/end.png');
  home = loadImage('assets/homePage.png');
  results = loadImage('assets/results.png');

  first = loadImage('assets/first.png');
  com = loadImage('assets/computer.png');
  load = loadImage('assets/load.png');
  amazing = loadImage('assets/amazing.png');

  //ads
  horrorMov = loadImage('assets/viktor.png');

  // buttons
    close = loadImage('assets/close.png');
    heart = loadImage('assets/buttons/heart.png');
  //  ghost = loadImage('assets/ads/ad1.png');
}

function setup() {
  myCanvas = createCanvas(800, 600);
  myCanvas.parent('myCanvas');

  // SEARCH BUTTON
  searchBut = new Clickable();
  searchBut.locate(20, 20);

  searchBut.onHover = function() {
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
  }

  searchBut.onOutside = function() {
    this.color = "#EEEEEE00";
    this.text = "search";
    this.textColor = "#000000";
  }

  searchBut.onRelease = function() {
    mode = 'searchResults';
  }


  //click heart
  clickHeart = new Clickable();
  clickHeart.text = "";
  clickHeart.image = heart;
  clickHeart.color = "#EEEEEE00";
  clickHeart.locate(370, 340);
  clickHeart.resize(50, 50);
  clickHeart.strokeWeight = 0;

  clickHeart.onHover = function() {
    ;
    clickHeart.imageScale = 1.1;
  }

  clickHeart.onOutside = function() {
    clickHeart.imageScale = 1;
  }

  clickHeart.onRelease = function() {
    loadWidth+=50;
    if (loadWidth >= 400)
    {
      mode = 'homePage';
    }
  }


  // ADS START HERE
  ad1 = new Clickable();
  ad1.locate(20, 20);
  //This function is ran when the clickable is hovered but not pressed.
  ad1.onHover = function() {
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
    this.text = "click ad?";
  }
  //This function is ran when the clickable is NOT hovered.
  ad1.onOutside = function() {
    this.color = "#EEEEEE00";
    this.text = "Ad 1";
    this.textColor = "#000000";
  }

  ad1.onRelease = function() {
    this.x += 50;
  }
}

function draw() {
  switch (mode) {
    case 'titlePage':
      titlePage();
      break;
    case 'ending':
      ending();
      break;
    case 'first':
      first_screen();
      break;
    case 'com':
      computer();
      break;
      case 'loading':
        loading();
        break;
    case 'homePage':
      homePage();
      break;
    case 'searchResults':
      searchResults();
      break;
  }
}

function titlePage() {
  background(title);
}

function ending() {
  background(endPage);
}

function first_screen() {
  background(first);
}

function computer() {
  background(com);
}

function loading(){
  background(load);
  clickHeart.draw();
  push();
    fill('#83EAF5');
    noStroke();
    rect(190,410,loadWidth,40);
  pop();
}

function homePage() {
  background(home);
  searchON = true;
  searchBut.draw();
}

function searchResults() {
  background(results);
  ad1.draw();
}

function keyPressed() {
  if (searchON === true) {
    image(searchOne[num], 0, 0);
    if (num != searchOne.length) {
      num++;
    }
  } else {
    mode = 'ending';
  }

}
