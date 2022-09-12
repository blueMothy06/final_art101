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
let mode = 'titlePage';

//buttons
let close;
let searchButton;
let searchBar;
let heart;
let link;
let ad1;
let toaster;
let depan;
let thing;
let buy;

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
  popup = loadImage('assets/popup.png');
  toaster = loadImage('assets/toaster.png');
  depan = loadImage('assets/depan.png');

  // buttons
  close = loadImage('assets/close.png');
  heart = loadImage('assets/buttons/heart.png');
  searchButton = loadImage('assets/buttons/searchBut.png');
  searchBar = loadImage('assets/buttons/searchBar.png');
  link = loadImage('assets/buttons/result_link.png');
  thing = loadImage('assets/thing.png');
  buy = loadImage('assets/buttons/buy.png');
}

function setup() {
  myCanvas = createCanvas(800, 600);
  myCanvas.parent('myCanvas');

  //close
  clickClose = new Clickable();
  clickClose.text = "";
  clickClose.image = close;
  clickClose.color = "#EEEEEE00";
  clickClose.locate(630, 80);
  clickClose.resize(50, 50);
  clickClose.strokeWeight = 0;

  clickClose.onHover = function() {
    clickClose.imageScale = 1.1;
  }

  clickClose.onOutside = function() {
    clickClose.imageScale = 1;
  }

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

  //buy
  clickBuy = new Clickable();
  clickBuy.text = "";
  clickBuy.image = buy;
  clickBuy.locate(630, 540);
  clickBuy.resize(100, 50);
  clickBuy.strokeWeight = 0;

  clickBuy.onHover = function() {
    clickBuy.imageScale = 1.1;
  }

  clickBuy.onOutside = function() {
    clickBuy.imageScale = 1;
  }

  clickBuy.onRelease = function() {
    num++;
    if (num === 11) {
      mode = 'ending';
    } else {
      mode = 'amaze';
    }
    print("Nums:" + num);
  }

  //close
  clickThing = new Clickable();
  clickThing.text = "";
  clickThing.image = thing;
  clickThing.color = "#EEEEEE00";
  clickThing.locate(82, 310);
  clickThing.resize(370, 280);
  clickThing.strokeWeight = 0;

  clickThing.onHover = function() {
    clickThing.imageScale = 1.1;
  }

  clickThing.onOutside = function() {
    clickThing.imageScale = 1;
  }

  clickThing.onRelease = function() {
    pause = false;
    counter = 38;
  }


  // ADS START HERE
  ad1 = new Clickable();
  ad1.text = "";
  ad1.image = horrorMov;
  ad1.locate(620, 180);
  ad1.resize(150, 300);
  ad1.strokeWeight = 0;

  // ad1.onRelease = function() {
  //   this.x += 50;
  // }

  //toaster ad
  ad2 = new Clickable();
  ad2.text = "";
  ad2.image = toaster;
  ad2.locate(500, 180);
  ad2.resize(200, 200);
  ad2.strokeWeight = 0;

  //depan ad
  ad3 = new Clickable();
  ad3.text = "";
  ad3.image = depan;
  ad3.locate(500, 400);
  ad3.resize(200, 200);
  ad3.strokeWeight = 0;

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
    case 'amaze':
      amazingPage();
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
  ad2.draw();
  ad3.draw();
  if (popupF === false) {
    image(popup, 100, 100);
    clickClose.draw();
  } else {
    clickThing.draw();
  }

}

function amazingPage() {
  background(amazing);
  clickBuy.draw();
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
    } else if (counter === 36) {
      pause = true;
    } else if (counter > 46 && counter < 53) {
      mode = 'amaze';
    }
    if (pause != true) {
      if (counter < narration.length) {
        document.getElementById("story").innerHTML = narration[counter];
        counter += 1;
      } else {
        mode = 'ending';
      }
    }
    print('The value of counter is ' + counter);
  }
}
