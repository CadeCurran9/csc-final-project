var screen = 0;

var splashScreen = function() { //Starting screen of the game
screen = 1;
background(94, 141, 191);
textSize(77);
text("Madlibs!",54,107);
//Button 1 for start
    noStroke();
    fill(0, 0, 0);
    rect(115,171,171,41);
    fill(51, 199, 204);
    rect(115,166,166,41);
    fill(0, 64, 255);
    textSize(35);
    text("Start!", 157, 197);
//Button 2 for instructions
    noStroke();
    fill(0, 0, 0);
    rect(115,261,171,41);
    fill(51, 199, 204);
    rect(115,256,166,41);
    fill(0, 64, 255);
    textSize(29);
    text("Instructions", 124, 287);
};
var instructionsScreen = function() { //Instructions screen of the game
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

var word1;
var word2;
var word3;
var word4;

/*
Arrays for all the possible selections in start screen
*/

var nouns = ["Sock", "Baby", "Ship", "Chocolate"];
var adjectives = ["Skinny", "Tall", "Strong", "Fickle"];
var verbings = ["Running", "Falling", "Wrecking", "Calling"];
var verbs = ["Sleep", "Swing", "Crawl", "Sling"];

var startScreen = function() { //Start screen function
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
    var finalScreen = function() {
    
    };
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
    /*
    The if statements for the start screen to select each word for each required         input
    
    For Nouns (word1)
    */
    if (screen === 3 && mouseX > 17 && mouseX < 55 && mouseY > 88 && mouseY < 101) {
        word1 = "Sock";
    }
    if (screen === 3 && mouseX > 102 && mouseX < 142 && mouseY > 88 && mouseY < 101) {
        word1 = "Baby";
    }
    if (screen === 3 && mouseX > 186 && mouseX < 222 && mouseY > 88 && mouseY < 101) {
        word1 = "Ship";
    }
    if (screen === 3 && mouseX > 271 && mouseX < 351 && mouseY > 88 && mouseY < 101) {
        word1 = "Chocolate";
    }
    /*
    For Adjectives (word2)
    */
    if (screen === 3 && mouseX > 17 && mouseX < 70 && mouseY > 164 && mouseY < 176) {
        word2 = "Skinny";
    }
    if (screen === 3 && mouseX > 107 && mouseX < 133 && mouseY > 164 && mouseY < 176) {
        word2 = "Tall";
    }
    if (screen === 3 && mouseX > 197 && mouseX < 248 && mouseY > 164 && mouseY < 176) {
        word2 = "Strong";
    }
    if (screen === 3 && mouseX > 287 && mouseX < 332 && mouseY > 164 && mouseY < 176) {
        word2 = "Fickle";
    }
    /*
    For Verbs ending in -ing (word3)
    */
    if (screen === 3 && mouseX > 17 && mouseX < 82 && mouseY > 244 && mouseY < 256) {
        word3 = "Running";
    }
    if (screen === 3 && mouseX > 108 && mouseX < 158 && mouseY > 244 && mouseY < 256) {
        word3 = "Falling";
    }
    if (screen === 3 && mouseX > 197 && mouseX < 270 && mouseY > 244 && mouseY < 256) {
        word3 = "Wrecking";
    }
    if (screen === 3 && mouseX > 287 && mouseX < 340 && mouseY > 244 && mouseY < 256) {
        word3 = "Calling";
    }
    /*
    For Verbs (word4)
    */
    if (screen === 3 && mouseX > 17 && mouseX < 61 && mouseY > 319 && mouseY < 332) {
        word4 = "Sleep";
    }
    if (screen === 3 && mouseX > 107 && mouseX < 154 && mouseY > 319 && mouseY < 332) {
        word4 = "Swing";
    }
    if (screen === 3 && mouseX > 197 && mouseX < 241 && mouseY > 319 && mouseY < 332) {
        word4 = "Crawl";
    }
    if (screen === 3 && mouseX > 287 && mouseX < 325 && mouseY > 319 && mouseY < 332) {
        word4 = "Sling";
    }
    if (word1 === undefined) {} //if no value is in word1, nothing will happen
    else {
    fill(94, 141, 191);
    noStroke();
    rect(100,108,202,32);
    fill(21, 35, 161);
    text("You chose: " + word1 + "!", 120,131);
    }
    if (word2 === undefined) {} //if no value is in word2, nothing will happen
    else {
    fill(94, 141, 191);
    noStroke();
    rect(100,180,202,26);
    fill(21, 35, 161);
    text("You chose: " + word2 + "!", 120,200);
    }
    if (word3 === undefined) {} //if no value is in word3, nothing will happen
    else {
    fill(94, 141, 191);
    noStroke();
    rect(100,264,202,26);
    fill(21, 35, 161);
    text("You chose: " + word3 + "!", 120,282);
    }
    if (word4 === undefined) {} //if no value is in word4, nothing will happen
    else {
    fill(94, 141, 191);
    noStroke();
    rect(100,346,202,26);
    fill(21, 35, 161);
    text("You chose: " + word4 + "!", 120,364);
    }
};
/*
draw = function() {
    println(mouseX + ", " + mouseY);
};
*/

