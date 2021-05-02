var screen = 0;

var splashScreen = function() {
screen = 1;
background(94, 141, 191);
textSize(77);
text("Madlibs!",54,107);
//Button 1
    noStroke();
    fill(0, 0, 0);
    rect(115,171,171,41);
    fill(51, 199, 204);
    rect(115,166,166,41);
    fill(0, 64, 255);
    textSize(35);
    text("Start!", 157, 197);
//Button 2
    noStroke();
    fill(0, 0, 0);
    rect(115,261,171,41);
    fill(51, 199, 204);
    rect(115,256,166,41);
    fill(0, 64, 255);
    textSize(29);
    text("Instructions", 124, 287);
};
var instructionsScreen = function() {
    screen = 2;
    background(94, 141, 191);
    textSize(50);
    text("Instructions",69,67);
    textSize(20);
    fill(255, 255, 255);
    text("To begin the game, click 'Start!', you will then be prompted to choose 1 option at each directed step. After making 4 selections, click 'Generate' at the bottom of the screen to get your Madlibs paragraph!",20,107,300,400);
    fill(0, 0, 0);
    rect(129,304,150,40);
    fill(59, 200, 219);
    rect(125,300,150,40);
    textSize(30);
    fill(0, 0, 0);
    text("Got it!",160,330);
};

var nouns = ["Sock", "Baby", "Ship", "Chocolate"];
var adjectives = ["Skinny", "Tall", "Strong", "Fickle"];
var verbings = ["Running", "Falling", "Wrecking", "Calling"];
var verbs = ["Sleep", "Swing", "Crawl", "Sling"];

var startScreen = function() {
    screen = 3;
    background(94, 141, 191);
    textSize(30);
    fill(255, 255, 255);
    text("Choose your Words",74,30);
    textSize(18);
    fill(255, 255, 255);
    text("Noun:",15,70);
    for (var i = 0; i < 10; i++) {
        fill(97, 255, 184);
        text(nouns[i], 15 + (i*85), 100);
    }
    fill(255, 255, 255);
    text("Adjective:",15,145);
    for (var i = 0; i < 10; i++) {
        fill(97, 255, 184);
        text(adjectives[i], 15 + (i*90), 175);
    }
    fill(255, 255, 255);
    text("Verb ending in -ing:",15,220);
    for (var i = 0; i < 10; i++) {
        fill(97, 255, 184);
        text(verbings[i], 15 + (i*90), 255);
    }
    fill(255, 255, 255);
    text("Verb:",15,295);
    for (var i = 0; i < 10; i++) {
        fill(97, 255, 184);
        text(verbs[i], 15 + (i*90), 330);
    }
};
splashScreen();
mouseClicked = function() {
    if (screen === 1 && mouseX > 115 && mouseX < 276 &&
    mouseY < 300 && mouseY > 255) {
    instructionsScreen();
    }
    if (screen === 1 && mouseX > 115 && mouseX < 276 &&
    mouseY < 210 && mouseY > 165) {
    startScreen();
    }
    if (screen === 2 && mouseX > 125 && mouseX < 276 &&
    mouseY < 340 && mouseY > 300) {
    splashScreen();
    }
};

var option1 = [];
var option2 = [];
var option3 = [];
var option4 = [];

/*
draw = function() {
    println(mouseX + ", " + mouseY);
};
*/

