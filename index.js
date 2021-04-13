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

splashScreen();
