
//need 4 crystals with random result//
var randomResult;
var totalScore;

//getter//
$(".crystalImage").attr('class');
//4 crystal needs a random result between 1-12//
randomResult = Math.floor(Math.random() * 101) + 19;
console.log(randomResult);

$("#yts").html('Your Goal: '+ randomResult);
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystalImage',
        "data-random": random
    });
    $(".crystalImage").append(crystal);

}
$("crystal").on('click', function (){
     var result;
     var num = $(this).attr('data-random');

    console.log($(this).attr('data-random'));
});

//need target nuimber//
var targetNumber;
//need current score//
var CurrentScore;
//need wins/losses score//
var loss;
var win;
//need random value of each crystal//
//when target is reached declare win//
//when target is over declare loss//
//clicking on crystal accumulates points//