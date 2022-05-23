let myCanvas;
let num = 0;
let pause = false;
let popupF = false;
//let ram = random(50, 450);

//loading
let loadWidth = 20;

//ads
let horrorMov;
let popup;
//let ghost;

// bgs
let title;
let endPage;
let first;
let com;
let load;
let home;
let home2;
let results;
let compass;
let amazing;

let myFont;
let mode = 'comp';

//buttons
let close;
let searchButton;
let searchBar;
let heart;
let link;
let ad1;

// arrays


function preload() {
  myFont = loadFont('JosefinSans-Light.ttf');
  title = loadImage('assets/title.png');
  endPage = loadImage('assets/end.png');
  home = loadImage('assets/homePage.png');
  home2 = loadImage('assets/homePage2.png');
  results = loadImage('assets/results.png');

  first = loadImage('assets/first.png');
  com = loadImage('assets/computer.png');
  load = loadImage('assets/load.png');
  compass = loadImage('assets/compass.png');
  amazing = loadImage('assets/amazing.png');

  //ads
  horrorMov = loadImage('assets/viktor.png');
  popupF = loadImage('assets/popup.png');

  // buttons
  close = loadImage('assets/close.png');
  heart = loadImage('assets/buttons/heart.png');
  searchButton = loadImage('assets/buttons/searchBut.png');
  searchBar = loadImage('assets/buttons/searchBar.png');
  link = loadImage('assets/buttons/result_link.png');
  //  ghost = loadImage('assets/ads/ad1.png');
}

function setup() {
  myCanvas = createCanvas(800, 600);
  myCanvas.parent('myCanvas');

  //close
  clickClose = new Clickable();
  clickClose.text = "";
  clickClose.image = close;
  clickClose.color = "#EEEEEE00";
  clickClose.locate(85, 350);
  clickClose.resize(490, 80);

  clickClose.onRelease = function() {
    popupF = true;
    mode = 'comp';
  }

  //SEARCH BUTTON
  searchBut = new Clickable();
  searchBut.text = "";
  searchBut.image = searchButton;
  searchBut.color = "#EEEEEE00";
  searchBut.locate(580, 350);
  searchBut.strokeWeight = 0;
  searchBut.resize(170, 70);

  searchBut.onHover = function() {
    searchBut.imageScale = 1.1;
  }

  searchBut.onOutside = function() {
    searchBut.imageScale = 1;
  }

  searchBut.onRelease = function() {
    mode = 'searchResults';
    pause = false;
    counter++;
  }


  //searchBar
  clickBar = new Clickable();
  clickBar.text = "";
  clickBar.image = searchBar;
  clickBar.color = "#EEEEEE00";
  clickBar.locate(85, 350);
  clickBar.resize(490, 80);

  clickBar.onRelease = function() {
    mode = 'homePage2';
    pause = false;
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
    clickHeart.imageScale = 1.1;
  }

  clickHeart.onOutside = function() {
    clickHeart.imageScale = 1;
  }

  clickHeart.onRelease = function() {
    loadWidth += 50;
    if (loadWidth >= 400) {
      pause = false;
      counter++;
      mode = 'homePage';
    }
  }

  //click link
  clickLink = new Clickable();
  clickLink.text = "";
  clickLink.image = link;
  clickLink.color = "#EEEEEE00";
  clickLink.locate(50, 420);
  clickLink.resize(500, 38);
  clickLink.strokeWeight = 0;

  clickLink.onHover = function() {
    clickLink.imageScale = 1.1;
  }

  clickLink.onOutside = function() {
    clickLink.imageScale = 1;
  }

  clickLink.onRelease = function() {
    if (pause === true) {
      mode = 'comp';
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
    case 'homePage2':
      homePage2();
      break;
    case 'searchResults':
      searchResults();
      break;
    case 'comp':
      compassPage();
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

function loading() {
  background(load);
  clickHeart.draw();
  push();
  fill('#83EAF5');
  noStroke();
  rect(190, 410, loadWidth, 40);
  pop();
}

function homePage() {
  background(home);
  clickBar.draw();
}

function homePage2() {
  background(home2);
  searchBut.draw();
}

function searchResults() {
  background(results);
  clickLink.draw();
  ad1.draw();
}

function compassPage() {
  background(compass);
  if (popupF === false)
  {
    image(popup, 100,100);
    clickClose.draw();
  }
}

function keyPressed() {
  if (key == ' ') {
    if (counter === 1) {
      mode = 'first';
    } else if (counter === 16) {
      mode = 'com';
    } else if (counter === 22) {
      mode = 'loading';
      pause = true;
      counter++;
    } else if (counter === 26) {
      pause = true;
      counter++;
    }
    else if (counter === 36) {
      pause = true;
      counter++;
    }
    if (pause != true) {
      if (counter != narration.length) {
        document.getElementById("story").innerHTML = narration[counter];
        counter+=1;
      } else {
        mode = 'end';
      }
    }
    print('The value of counter is ' + counter);
  }
}
