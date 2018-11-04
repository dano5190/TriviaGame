var interval;
var time = 30;
var running = false;
var correct = 0;
var wrong = 0;
var incomplete = 8;

var q1_done = false;
var q2_done = false;
var q3_done = false;
var q4_done = false;

var answer_key = [true, true, true, false, true, false, false, true];

var user_answers = ["", "", "", "", "", "", "", ""];

var qs_answered = [false, false, false, false, false, false, false, false];

var first_t = $("<button id = true1></button>").text("True");
var first_f = $("<button id = false1></button>").text("False");

var sec_t = $("<button id = true2></button>").text("True");
var sec_f = $("<button id = false2></button>").text("False");

var third_t = $("<button id = true3></button>").text("True");
var third_f = $("<button id = false3></button>").text("False");

var fourth_t = $("<button id = true4></button>").text("True");
var fourth_f = $("<button id = false4></button>").text("False");

var fifth_t = $("<button id = true5></button>").text("True");
var fifth_f = $("<button id = false5></button>").text("False");

var sixth_t = $("<button id = true6></button>").text("True");
var sixth_f = $("<button id = false6></button>").text("False");

var seventh_t = $("<button id = true7></button>").text("True");
var seventh_f = $("<button id = false7></button>").text("False");

var eighth_t = $("<button id = true8></button>").text("True");
var eighth_f = $("<button id = false8></button>").text("False");

$("#start-button").on("click", function () {
    $("#start").empty();
    $("#timer").html("Time Remaining: " + time);

    $("#ques1").html("Is this a Question?" + "<br>");
    $("#ques1").append(first_t, first_f);

    $("#ques2").html("The chemical formula for typical table salt is 'Sodium Chloride'" + "<br>");
    $("#ques2").append(sec_t, sec_f);

    $("#ques3").html("Fire is Exothermic" + "<br>");
    $("#ques3").append(third_t, third_f);
 
    $("#ques4").html("Squid are in the same family as Jellyfish" + "<br>");
    $("#ques4").append(fourth_t, fourth_f);
 
    $("#ques5").html("Earth is a Planet" + "<br>");
    $("#ques5").append(fifth_t, fifth_f);

    $("#ques6").html("Drums are woodwind insruments" + "<br>");
    $("#ques6").append(sixth_t, sixth_f);
 
    $("#ques7").html("'The Little Mermaid' is a Grimm's Fairy Tale" + "<br>");
    $("#ques7").append(seventh_t, seventh_f);
 
    $("#ques8").html("Science Rocks!" + "<br>");
    $("#ques8").append(eighth_t, eighth_f);
    start();

});

function start() {
    if (time <= 0){
        clearInterval(interval);
    }
    if (time > 0) {
       
        interval = setInterval(count, 1000);
    } else {
        clearInterval(interval);
        time = 0;
        running = false;

    }
}

function count() {
    if (time > -1) {
        $("#timer").text("Time Remaining: " + time);
        time--;
        console.log()
    } else {
        clearInterval(interval);
        tallyScore();
        endScreen();
    }
}

function endScreen() {

    $("#ques_wrap").empty();
    $("#results").html("Correct = " + correct + "<br> Incorrect = " + wrong + "<br>Unanswered = " + incomplete);
}

function tallyScore() {

    for (var i = 0; i < qs_answered.length; i++) {
        if (qs_answered[i] === true) {
            incomplete--;
        }
    }
    for(var j = 0; j < user_answers.length; j++){
        if(user_answers[j] === answer_key[j]){
            correct++;
        }
    }
    wrong = (8 - (incomplete+correct));
}

$(first_t).on("click", function () {
    qs_answered[0] = true;
    user_answers[0] = true;
});

$(first_f).on("click", function () {
    qs_answered[0] = true;
    user_answers[0] = false;
});

$(sec_t).on("click", function () {
    qs_answered[1] = true;
    user_answers[1] = true;
});

$(sec_f).on("click", function () {
    qs_answered[1] = true;
    user_answers[1] = false;
});

$(third_t).on("click", function () {
    qs_answered[2] = true;
    user_answers[2] = true;
});

$(third_f).on("click", function () {
    qs_answered[2] = true;
    user_answers[2] = false;
});

$(fourth_t).on("click", function () {
    qs_answered[3] = true;
    user_answers[3] = true;
});

$(fourth_f).on("click", function () {
    qs_answered[3] = true;
    user_answers[3] = false;
});

$(fifth_t).on("click", function () {
    qs_answered[4] = true;
    user_answers[4] = true;
});

$(fifth_f).on("click", function () {
    qs_answered[4] = true;
    user_answers[4] = false;
});

$(sixth_t).on("click", function () {
    qs_answered[5] = true;
    user_answers[5] = true;
});

$(sixth_f).on("click", function () {
    qs_answered[5] = true;
    user_answers[5] = false;
});

$(seventh_t).on("click", function () {
    qs_answered[6] = true;
    user_answers[6] = true;
});

$(seventh_f).on("click", function () {
    qs_answered[6] = true;
    user_answers[6] = false;
});

$(eighth_t).on("click", function () {
    qs_answered[7] = true;
    user_answers[7] = true;
});

$(eighth_f).on("click", function () {
    qs_answered[7] = true;
    user_answers[7] = false;
});