$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
  // Mobile Menu Funcation
  $(".menu-btn").on('click touch', function() {
    $('.menu').toggleClass('show');
  });

  $(".hours-list-expand").on('click touch', function() {
    $('.hours-list').toggleClass('collapse');
  });


  // Dynamic Hours
  var openTime = moment('09:00am', 'HH:mma');
  var closeTime = moment('5:30pm', 'h:mma');
  var openTime2 = moment('09:00am', 'h:mma');
  var closeTime2 = moment('01:30pm', 'h:mma');


  var monday = moment().isoWeekday(1);
  var tuesday = moment().isoWeekday(2);
  var wednesday = moment().isoWeekday(3);
  var thursday = moment().isoWeekday(4);
  var friday = moment().isoWeekday(5);
  var saturday = moment().isoWeekday(6);
  var sunday = moment().isoWeekday(7);
  var now = moment();
  var today = moment().startOf('day'); 

  // Monday ///////////////////////
  if (today.startOf('day').isSame(monday.startOf('day'))) { 
    if (now > closeTime) {
         $('.open-close').append("<span>Closed</span>");
         $('.open-close').addClass('closed');
         $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
          $('header.wrap .hours-today').append(openTime.format('LT'));
      } 
      else if (now < openTime){
          $('.open-close').append('<span>Closed</span>');
          $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
          $('header.wrap .hours-today').append(openTime.format('LT'));
          $('.open-close').addClass('closed');
      }
      else {
         $('.open-close').append('<span>Open</span>');
         $('.open-close').addClass('open');
         $('header.wrap .hours-today').append('Close at ');
         $('header.wrap .hours-today').append(closeTime.format('LT'));
      }
  }

  
  // Tuesday ///////////////////////
  if (today.startOf('day').isSame(tuesday.startOf('day'))) { 
   if (now > closeTime) {
         $('.open-close').append("<span>Closed</span>");
         $('.open-close').addClass('closed');
         $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
          $('header.wrap .hours-today').append(openTime.format('LT'));
      } 
      else if (now < openTime){
          $('.open-close').append('<span>Closed</span>');
          $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
          $('header.wrap .hours-today').append(openTime.format('LT'));
          $('.open-close').addClass('closed');
      }
      else {
         $('.open-close').append('<span>Open</span>');
         $('.open-close').addClass('open');
         $('header.wrap .hours-today').append('Close at ');
         $('header.wrap .hours-today').append(closeTime.format('LT'));
      }
  }

  // Wednesday ///////////////////////
  if (today.startOf('day').isSame(wednesday.startOf('day'))) { 
   if (now > closeTime) {
         $('.open-close').append("<span>Closed</span>");
         $('.open-close').addClass('closed');
         $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
          $('header.wrap .hours-today').append(openTime.format('LT'));
      } 
      else if (now < openTime){
          $('.open-close').append('<span>Closed</span>');
          $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
          $('header.wrap .hours-today').append(openTime.format('LT'));
          $('.open-close').addClass('closed');
      }
      else {
         $('.open-close').append('<span>Open</span>');
         $('.open-close').addClass('open');
         $('header.wrap .hours-today').append('Close at ');
         $('header.wrap .hours-today').append(closeTime.format('LT'));
      }
  }

  // Thursday ///////////////////////
  if (today.startOf('day').isSame(thursday.startOf('day'))) { 
   if (now > closeTime) {
         $('.open-close').append("<span>Closed</span>");
         $('.open-close').addClass('closed');
         $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
          $('header.wrap .hours-today').append(openTime2.format('LT'));
      } 
      else if (now < openTime){
          $('.open-close').append('<span>Closed</span>');
          $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
          $('header.wrap .hours-today').append(openTime.format('LT'));
          $('.open-close').addClass('closed');
      }
      else {
         $('.open-close').append('<span>Open</span>');
         $('.open-close').addClass('open');
         $('header.wrap .hours-today').append('Close at ');
         $('header.wrap .hours-today').append(closeTime.format('LT'));
      }
  }

  if (today.startOf('day').isSame(friday.startOf('day'))) { 
   if (now > closeTime) {
         $('.open-close').append("<span>Closed</span>");
         $('.open-close').addClass('closed');
         $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
          $('header.wrap .hours-today').append(openTime2.format('LT'));
      } 
      else if (now < openTime){
          $('.open-close').append('<span>Closed</span>');
          $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
          $('header.wrap .hours-today').append(openTime.format('LT'));
          $('.open-close').addClass('closed');
      }
      else {
         $('.open-close').append('<span>Open</span>');
         $('.open-close').addClass('open');
         $('header.wrap .hours-today').append('Close at ');
         $('header.wrap .hours-today').append(closeTime.format('LT'));
      }
  }

  if (today.startOf('day').isSame(saturday.startOf('day'))) { 
   if (now > closeTime) {
        $('.open-close').append("<span>Closed</span>");
        $('.open-close').addClass('closed');
        $('.hours-today').prepend("<span class='opening-at'>We Open Monday at: </span>");
        $('header.wrap .hours-today').append(openTime.format('LT'));
    } 
    else if (now < openTime){
        $('.open-close').append('<span>Closed</span>');
        $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
        $('header.wrap .hours-today').append(openTime2.format('LT'));
        $('.open-close').addClass('closed');
    }
    else {
        $('.open-close').append('<span>Open</span>');
        $('.open-close').addClass('open');
        $('header.wrap .hours-today').append('Close at ');
        $('header.wrap .hours-today').append(closeTime.format('LT'));
    }
  }

  if (today.startOf('day').isSame(sunday.startOf('day'))) { 
    if (now > closeTime) {
      $('.open-close').append("<span>Closed</span>");
      $('.open-close').addClass('closed');
      $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
      $('header.wrap .hours-today').append(openTime.format('LT'));
    } 
  }

});
