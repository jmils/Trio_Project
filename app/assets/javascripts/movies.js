// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  $('#go').click(function() {
    console.log("hey");
      var page1 = $('.page1');
      var page2 = $('.page2');
      var toHide = page1.is(':visible') ? page1 : page2;
      var toShow = page2.is(':visible') ? page1 : page2;

      toHide.removeClass('flip in').addClass('flip out').hide();
      toShow.removeClass('flip out').addClass('flip in').show();
  });
});

    // new click implementation
    $(document).ready(function(){
    $('.card').click(function(){
      $(this).toggleClass('flipped');
    });
  });

// function () {
//   var cards = document.querySelectorAll(".card.effect__click");
//   for( var i  = 0; i < cards.length; i++ ) {
//     var card = cards[i];
//     clickListener( card );
//   }

  // function clickListener(card) {
  //   card.addEventListener( "click", function() {
  //     var c = this.classList;
  //     alert("dgge")
  //     c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
  //   });
  // }

// $('#go').click(function() {
//   console.log("hey");
//     var page1 = $('.page1');
//     var page2 = $('.page2');
//     var toHide = page1.is(':visible') ? page1 : page2;
//     var toShow = page2.is(':visible') ? page1 : page2;
//
//     toHide.removeClass('flip in').addClass('flip out').hide();
//     toShow.removeClass('flip out').addClass('flip in').show();
// });
