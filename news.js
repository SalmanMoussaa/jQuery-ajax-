
$(document).ready(function () {
  $.ajax({
    url: "news.php",
    dataType: "json",
    success: function (data) {
      var newsHTML = "";
      $.each(data, function (index, value) {
        newsHTML += '<div class="news-article">';
        newsHTML += "<h2>" + value.category + "</h2>";
        newsHTML += "<h3>" + value.title + "</h3>";
        newsHTML += "<p>" + value.subtitle + "</p>";
        newsHTML += "</div>";
      });
      $("#news").html(newsHTML);
    },
  });
});