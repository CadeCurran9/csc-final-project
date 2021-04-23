var splashScreen = function() {
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
    background(94, 141, 191);
    textSize(50);
    text("Instructions",69,67);
    textSize(20);
    fill(255, 255, 255);
    text("To begin the game, click 'Start!', you will then be prompted to choose 1 option at each directed step. After making 4 selections, click 'Generate' at the bottom of the screen to get your Madlibs paragraph!",20,107,300,400);
    
};
splashScreen();
mouseClicked = function() {
    if (mouseX > 115 && mouseX < 276 &&
    mouseY < 300 && mouseY > 255) {
    instructionsScreen();
    }
};
    
draw = function() {
    println(mouseX + ", " + mouseY);
};
