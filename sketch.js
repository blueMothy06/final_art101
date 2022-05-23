let myCanvas;
let num = 0;
let searchON = false;
//let ram = random(50, 450);

//ads
let horrorMov;
//let ghost;

// bgs
let title;
let endPage;
let first;
let com;
let home;
let results;
let compass
let amazing;

let myFont;
let mode = 'titlePage';

//buttons
let close;
let searchBut;
let ad1;

// arrays
let searchOne = [];

function preload() {
  myFont = loadFont('JosefinSans-Light.ttf');
  title = loadImage('assets/title.png');
  endPage = loadImage('assets/end.png');
  home = loadImage('assets/homePage.png');
  results = loadImage('assets/results.png');
  close = loadImage('assets/close.png');

  first = loadImage('assets/first.png');
  com = loadImage('assets/computer.png');
  amazing = loadImage('assets/amazing.png');

  //ads
  horrorMov = loadImage('assets/viktor.png');
  //  ghost = loadImage('assets/ads/ad1.png');

  //texting set 1
  searchOne[0] = loadImage('assets/text/search01.png');
  searchOne[1] = loadImage('assets/text/search02.png');
  searchOne[2] = loadImage('assets/text/search03.png');
  searchOne[3] = loadImage('assets/text/search04.png');
  searchOne[4] = loadImage('assets/text/search05.png');
  searchOne[5] = loadImage('assets/text/search06.png');
  searchOne[6] = loadImage('assets/text/search07.png');
  searchOne[7] = loadImage('assets/text/search08.png');
  searchOne[8] = loadImage('assets/text/search09.png');
  searchOne[9] = loadImage('assets/text/search10.png');
  searchOne[10] = loadImage('assets/text/search11.png');
  searchOne[11] = loadImage('assets/text/search12.png');
  searchOne[12] = loadImage('assets/text/search13.png');
  searchOne[13] = loadImage('assets/text/search14.png');
  searchOne[14] = loadImage('assets/text/search15.png');
}

function setup() {
  myCanvas = createCanvas(800, 600);
  myCanvas.parent('myCanvas');

  // SEARCH BUTTON
  searchBut = new Clickable();
  searchBut.locate(20, 20);
  //This function is ran when the clickable is hovered but not pressed.
  searchBut.onHover = function() {
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
  }
  //This function is ran when the clickable is NOT hovered.
  searchBut.onOutside = function() {
    this.color = "#EEEEEE00";
    this.text = "search";
    this.textColor = "#000000";
  }

  searchBut.onRelease = function() {
    mode = 'searchResults';
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
