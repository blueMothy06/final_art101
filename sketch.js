let myCanvas;

let title;
let endPage;
let home;
let results;

let myFont;
let mode = 'titlePage';

function preload() {
  myFont = loadFont('JosefinSans-Light.ttf');
  title = loadImage('assets/title.png');
  endPage = loadImage('assets/end.png');
  home = loadImage('assets/homePage.png');
  results = loadImage('assets/results.png');
}

function setup() {
  myCanvas = createCanvas(600, 600);
  myCanvas.parent('myCanvas');
  background('white');
}

function draw() {
  switch (mode) {
    case 'titlePage':
      titlePage();
      break;
    case 'ending':
      ending();
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

function homePage() {
  background(home);
}

function searchResults() {
  background(results);
}
