var screen = 0;

var drawBitHead = function(bitmojiX,bitmojiY) {
    //Head
    fill(235, 218, 174);
    ellipse (bitmojiX+91.5,bitmojiY+86,37.5,37.5);

//Hat
    //left antler
    beginShape();
    fill(140, 100, 52);
    vertex(bitmojiX+55.5, bitmojiY+60);
    vertex(bitmojiX+64.5, bitmojiY+60);
    vertex(bitmojiX+61.5, bitmojiY+70);
    vertex(bitmojiX+81, bitmojiY+70);
    vertex(bitmojiX+78, bitmojiY+80);
    vertex(bitmojiX+49.5, bitmojiY+80);
    endShape(CLOSE);
    //right antler
    beginShape();
    vertex(bitmojiX+103,bitmojiY+70);
    vertex(bitmojiX+100.5,bitmojiY+79.5);
    vertex(bitmojiX+126,bitmojiY+79.5);
    vertex(bitmojiX+131.5,bitmojiY+60.5);
    vertex(bitmojiX+122.5,bitmojiY+60.5);
    vertex(bitmojiX+120,bitmojiY+70);
    vertex(bitmojiX+103,bitmojiY+70);
    endShape();
    //fill
    noStroke();
    arc(bitmojiX+91,bitmojiY+76,30,17,180,360);
//Eyes
    //left eye
    stroke(0, 0, 0);
    fill(0, 51, 255);
    ellipse(bitmojiX+82.5,bitmojiY+80.5,4.5,4.5);
    fill(0, 0, 0);
    ellipse(bitmojiX+82.5,bitmojiY+81,1.5,1.5);
    //right eye
    fill(0, 51, 255);
    ellipse(bitmojiX+96.5,bitmojiY+81,4.5,4.5);
    fill(0, 0, 0);
    ellipse(bitmojiX+96.5,bitmojiY+81,1.5,1.5);
//Mouth
    fill(0, 0, 0);
    arc(bitmojiX+91.5,bitmojiY+92.5,16,4,1,170);
//Nose
    line(bitmojiX+90,bitmojiY+87,bitmojiX+87.5,bitmojiY+87);
    line(bitmojiX+87.5,bitmojiY+87.5,bitmojiX+89,bitmojiY+84);
};
var drawBitBody = function(bitmojiX,bitmojiY) {
    //Body
    arc(bitmojiX+91.5,bitmojiY+127.5,39.5,46,180,360);
//Initials
    fill(255, 255, 255);
    textSize(10);
    text("A.S",bitmojiX+80.8,bitmojiY+111.5,62,60.5);
};
var drawAmirBitmoji = function(bitmojiX,bitmojiY) {
    drawBitHead(bitmojiX,bitmojiY);
    drawBitBody(bitmojiX,bitmojiY);
};

var drawBitmojiHead = function(x,y,bitmojiHead) {
noStroke();
fill(255, 224, 189); //
ellipse(x,y,bitmojiHead/151*100,bitmojiHead/150*96); //
fill(255, 255, 255); //
arc(x-(bitmojiHead/150*39),y+(bitmojiHead/150*35),28*bitmojiHead/150,55*bitmojiHead/150,0,361); //
arc(x+(bitmojiHead/150*42),y+43*bitmojiHead/150,22*bitmojiHead/150,55*bitmojiHead/150,0,361);//
fill(90, 56, 37);//
quad(x-56*bitmojiHead/150,y-14*bitmojiHead/150,x-35*bitmojiHead/150,y-40*bitmojiHead/150,x+1*bitmojiHead/1500,y-55*bitmojiHead/150,x-38*bitmojiHead/150,y-6*bitmojiHead/150);//
quad(x+49*bitmojiHead/150,y-1*bitmojiHead/150,x+39*bitmojiHead/150,y-32*bitmojiHead/150,x+15*bitmojiHead/150,y-52*bitmojiHead/150,x+35*bitmojiHead/150,y-5*bitmojiHead/150); //
ellipse(x,y-42*bitmojiHead/150,71*bitmojiHead/150,31*bitmojiHead/150);//
fill(65, 99, 34);//
ellipse(x-12*bitmojiHead/150,y,6*bitmojiHead/150,4*bitmojiHead/150);//
ellipse(x+15*bitmojiHead/150,y,6*bitmojiHead/150,4*bitmojiHead/150);//

stroke(5, 5, 5);//
fill(255, 224, 189);//
bezier(x,y, x+21*bitmojiHead/150, y+22*bitmojiHead/150, x-8*bitmojiHead/150, y+20*bitmojiHead/150, x-4*bitmojiHead/150, y+15*bitmojiHead/150);//

fill(255, 255, 255);//
arc(x+-2*bitmojiHead/150, y+28*bitmojiHead/150, 29*bitmojiHead/150 , 1*bitmojiHead/1500, 1, 183);//

fill(0, 0, 0);//
rect(x-56*bitmojiHead/157, y-60*bitmojiHead/150, 102*bitmojiHead/150, 8*bitmojiHead/150, 68*bitmojiHead/150);//
rect(x-33*bitmojiHead/149, y-109*bitmojiHead/150, 61*bitmojiHead/150, 51*bitmojiHead/150);//

line(x-18*bitmojiHead/150, y+27*bitmojiHead/150, x+19*bitmojiHead/150, y+27*bitmojiHead/150);//
};

var drawBitmojiBody = function (bodyX, bodyY, bodyH) {
    noStroke();
    fill(0, 153, 255);
quad(bodyX-81*bodyH/150,bodyY+100*bodyH/150,bodyX+7*bodyH/150,bodyY+79*bodyH/150,bodyX+4*bodyH/150,bodyY+50*bodyH/150,bodyX-77*bodyH/150,bodyY+36*bodyH/150);
quad(bodyX+95*bodyH/150,bodyY+74*bodyH/150,bodyX-12*bodyH/150,bodyY+81*bodyH/150,bodyX-1*bodyH/150,bodyY+49*bodyH/150,bodyX+70*bodyH/150,bodyY+31*bodyH/150);
fill(250, 250, 250);
textSize(29*bodyH/150);
text("CC", bodyX-23*bodyH/150, bodyY+54*bodyH/150, 55*bodyH/150, 96*bodyH/150);
};

var drawCadeBitmoji = function(bitmojiX, bitmojiY,bitmojiH) {
    drawBitmojiHead(bitmojiX,bitmojiY,bitmojiH);
    drawBitmojiBody(bitmojiX,bitmojiY,bitmojiH);
};

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
//Bitmoji & Authors
    drawAmirBitmoji(269,274);
    drawCadeBitmoji(30,372,50);
    textSize(14);
    text("By: Amir S. & Cade C.", 3,19);
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

var nouns = ["Sock", "Baby", "Ship", "Baboon"];
var adjectives = ["Skinny", "Tall", "Strong", "Brittle"];
var verbings = ["Running", "Falling", "Crawling", "Sliding"];
var nouns2 = ["Rhino", "Lion", "Deer", "Snake"];

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
    text("Noun:",15,295);
    for (var i = 0; i < 10; i++) {
        fill(97, 255, 184);
        text(nouns2[i], 15 + (i*90), 330);
    }
    var finalScreen = function() {
    
    };
};
var finalScreen = function() { //final screen of game with paragraph
    screen = 4;
    background(94, 141, 191);
    textSize(36);
    text("Madlibbed!",21,50);
    textSize(20);
    text("Today I went to the zoo. I saw a huge " + word1 + " trying to climb a tree... So naturally, I grabbed a " + word2 + " stick and threw it in their direction, but upon the release I heard a shout over my shoulder. I turned to see an angered zoo keeper " + word3 + " in my direction, so I ran and hopped a fence into a exhibit, and what luck to just end up in the " + word4 + " exhibit. Worst zoo experience EVER!!",20,100,352,286);
    fill(255, 255, 255);
    rect(300,367,94,29);
    textSize(15);
    fill(25, 112, 112);
    text("Try Again!",313,387);
};
splashScreen(); //starts the game

mouseClicked = function() {
    /*
    Buttons on Splash Screen
    */
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
        word1 = "sock";
    }
    if (screen === 3 && mouseX > 102 && mouseX < 142 && mouseY > 88 && mouseY < 101) {
        word1 = "baby";
    }
    if (screen === 3 && mouseX > 186 && mouseX < 222 && mouseY > 88 && mouseY < 101) {
        word1 = "ship";
    }
    if (screen === 3 && mouseX > 272 && mouseX < 332 && mouseY > 88 && mouseY < 101) {
        word1 = "baboon";
    }
    /*
    For Adjectives (word2)
    */
    if (screen === 3 && mouseX > 17 && mouseX < 70 && mouseY > 164 && mouseY < 176) {
        word2 = "skinny";
    }
    if (screen === 3 && mouseX > 107 && mouseX < 133 && mouseY > 164 && mouseY < 176) {
        word2 = "tall";
    }
    if (screen === 3 && mouseX > 197 && mouseX < 248 && mouseY > 164 && mouseY < 176) {
        word2 = "strong";
    }
    if (screen === 3 && mouseX > 287 && mouseX < 331 && mouseY > 164 && mouseY < 176) {
        word2 = "brittle";
    }
    /*
    For Verbs ending in -ing (word3)
    */
    if (screen === 3 && mouseX > 17 && mouseX < 82 && mouseY > 244 && mouseY < 256) {
        word3 = "running";
    }
    if (screen === 3 && mouseX > 108 && mouseX < 158 && mouseY > 244 && mouseY < 256) {
        word3 = "falling";
    }
    if (screen === 3 && mouseX > 196 && mouseX < 265 && mouseY > 244 && mouseY < 256) {
        word3 = "crawling";
    }
    if (screen === 3 && mouseX > 287 && mouseX < 339 && mouseY > 244 && mouseY < 256) {
        word3 = "sliding";
    }
    /*
    For Verbs (word4)
    */
    if (screen === 3 && mouseX > 17 && mouseX < 62 && mouseY > 319 && mouseY < 332) {
        word4 = "rhino";
    }
    if (screen === 3 && mouseX > 107 && mouseX < 139 && mouseY > 319 && mouseY < 332) {
        word4 = "lion";
    }
    if (screen === 3 && mouseX > 197 && mouseX < 236 && mouseY > 319 && mouseY < 332) {
        word4 = "deer";
    }
    if (screen === 3 && mouseX > 287 && mouseX < 337 && mouseY > 319 && mouseY < 332) {
        word4 = "snake";
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
    if (word1 !== undefined && word2 !== undefined && word3 !== undefined && word4 !== undefined) { //checks to see if all words have been selected (not undefined), then it will run the command
    finalScreen();
    
    /*
    resets the words to undefined, essentially restarting the program
    */
    word1 = undefined;
    word2 = undefined;
    word3 = undefined;
    word4 = undefined;
    }
    
    /*
    Code to return to home screen after paragraph has been outputted
    */
    
    if (screen === 4 && mouseX > 300 && mouseX < 395 && mouseY > 367 && mouseY < 390) {
    splashScreen();
    }
};
