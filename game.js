var colorMap = ["red", "green", "blue", "yellow"];
var gameArr = [];
var userArr = [];
var level = 0;
var started = false;

function randomNum(){
    var num = Math.random();
    return Math.floor(num*4);
}

$(document).on("keypress", function(e) {
    (!started)
    {
        $("#level-title").text("Level " + level);
        startGame();
        started = true;
    }
});

function startGame() {
    userArr = [];
    level++;
    $("#level-title").text("Level " + level);
    var num = randomNum();
    colorSel(colorMap[num]);
    gameArr.push(colorMap[num]);
    $("#" + colorMap[num]).fadeIn(100).fadeOut(100).fadeIn(100);
}

function continueGame(currLevel) {
    if(userArr[currLevel] === gameArr[currLevel])
    {
        if(userArr.length === gameArr.length)
        {
            setTimeout(function () {
                startGame();
            }, 1000);
        }
    }else {
        makeSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        });

        startAgain();
    }
}

$(".btn").click(function(e) {
    var whichColClick = $(this).attr("id");
    userArr.push(whichColClick);
    colorSel(whichColClick);
    continueGame(userArr.length-1);
});

function startAgain() {
    gameArr = [];
    level = 0;
    started = false;
}

function makeSound(sound) {
    path = 'sounds' + '/';
    var audio = new Audio(path + sound + '.mp3');
    audio.play();
}

function colorSel(color) {
    animate(color);
    makeSound(color);
}

function animate(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
    $("#" + color).removeClass("pressed");
    }, 100);
}

