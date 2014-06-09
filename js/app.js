$(document).ready(function () {
  playintrosong();
  fades();  
  
//Mouseenter Callback function
$('.ryucontain').mouseenter(function() {
$('.ryu-still').hide();
$('.ryu-ready').show();
 //Method chaining : Mouse enter + mouse leave
  }).mouseleave(function() {
$('.ryu-ready').hide();
$('.ryu-still').show();
  }).mousedown(function() {
$('.ryu-ready').hide();
$('.ryu-throwing').show();
$('.hadouken').show();
  playHadouken();
  // play hadouken sound
$('.hadouken').finish().show().animate(
  {'left': '1200px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '470px');
  }
);
  // show hadouken and animate it to the right of the screen
  }).mouseup(function() {
$('.ryu-throwing').hide();
$('.ryu-ready').show();;
    // ryu goes back to his ready position
});


//Keydown event for Ryu Cool pose. 
$(document).keydown(function(event){
if (event.keyCode == 88) {
 playsheriff (); 
 $('#music') [0].pause();
  $('.ryucool').show();
 $('.ryu-still').hide();
 $ ('.ryu-ready').hide();
 
//else $('ryu-ready').hide();
$(document).keyup(function(event) {
if ( event.keyCode == 88) {
 $('.ryucool').hide();
 $('.ryu-ready').show();
 $('#sheriff')[0].pause(); 
 $('#music')[0].load();
  $('#music')[0].play();


 };	


// alert( "Handler");
// $("ryucool").show();
//$('ryu-ready').hide();


}
);

};

});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
function playintrosong () {
  $('#music')[0].volume = 0.5;
  $('#music')[0].load();
  $('#music')[0].play();
}

function playsheriff () {
  $('#sheriff')[0].volume = 0.5;
  $('#sheriff')[0].load();
  $('#sheriff')[0].play();
}

function fades(){
$('.promo').fadeIn(4000,function(){  
$(this).fadeOut(3000,function(){
$('.Text').fadeIn(4000,function(){
$(this).fadeOut(3000,function(){
$('.jquerylogo').fadeIn(4000,function(){
$(this).fadeOut(3000,function(){
$('.guide').fadeIn(4000);





}
)}
)}
)}
)}
)}
)}













