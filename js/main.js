$(function() {
  var headers = $('.project-description').find('h1, h2, h3');
  var menu = $('.post-menu');
  
  headers.each(function (index) {
    var link = $(this).text().replace(/[^a-zA-Z0-9]/, '_'); 
    menu.append('<div class="post-menu-item post-menu-item-' + $(this).prop('tagName').toLowerCase() 
                  + '"><a href="#' + link + '">' + $(this).text() + '</a></div>');
    $(this).prepend('<a name="' + link + '">');
  });
});

