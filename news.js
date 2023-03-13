$(document).ready(function() {

   
    $.ajax({
      url: 'news.php',
      dataType: 'json',
      success: function(data) {
       
        $.each(data, function(index, article) {
          var $article = $('<div>').addClass('article');
          var $title = $('<h2>').text(article.title);
          var $author = $('<p>').text('By ' + article.author);
          var $date = $('<p>').text(article.date);
          var $content = $('<p>').text(article.content);
          $article.append($title).append($author).append($date).append($content);
          $('.news-container').append($article);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
    
  });
 
  
  
  
  