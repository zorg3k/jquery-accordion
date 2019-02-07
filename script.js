// Code goes here

$(document).ready(function() {
var childDiv;
$("div[id^='div-']").hover(function() {
  var childDiv = $(this).find('div'); // div class details
  if ($(this).find('div').css('display') == 'none')
  // Does not get image by url -> wrong size returned !!!
  //$(this).css('cursor','url(https://i.postimg.cc/XpzTRSRr/cursor-plus.png),auto');
  {
    $(this).addClass('plus');
    $(this).removeClass('minus');
  } else {
    // Does not get image by url too !!!
    //$(this).css('cursor','url(http://i.postimg.cc/560hKNRc/cursor-minus.png),auto');
    $(this).addClass('minus');
    $(this).removeClass('plus');
  }
}).click(function() {
  var obj = $(this).find('div');
  if ($(obj).is('div'))
    if ($(obj).css('display') == 'none')
    {
      $(obj).css('display', 'block');
      $(this).addClass('minus');
      $(this).removeClass('plus');
    }
    else
    {
      $(obj).css('display', 'none');
      $(this).addClass('plus');
      $(this).removeClass('minus');
    }
});

});