$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
       $('.ryu-ready').hide();
       $('.ryu-still').show();
    })
    .mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {left: '300px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '-212px');
            }
        );
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();   
    })
    $(document).keydown(function(event) {
      if(event.which == 88){
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
      }
  })
  .keyup(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
});

var playHadouken = function(){
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

// var add = function(number1, number2, number3){
//     return number1 + number2 + number3;   
// }

// add(23, 14, 87);

// $('.hadouken').animate({left: '300px'}, 500, function(){})

// var ryu = {
//     size: 42,
//     color: blue,
//     mouseenter: function() {
//         console.log("Hello World");
//     }
// }

// ryu.size; //42
// ryu.color; //blue
// ryu.mouseenter() // "Hello World"

// $('ryu').mouseenter(sayHello);

// var sayHello = function(){
//     console.log("Hello");
// }