$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
       $('.ryu-still').show();
       $('.ryu-ready').hide();
    })
    .mousedown(function() {
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});


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