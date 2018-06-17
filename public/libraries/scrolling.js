$(document).ready(function() {
  $("body").scrollspy({ target: ".navbar", offset: 54 });
  $("#navbarSupportedContent a").on("click", function(e) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  var sections = $("section"),
    nav = $("nav"),
    nav_height = nav.outerHeight();
  console.log(nav_height);

  $(window).on("scroll", function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height - 10,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });
});

$(".owl-carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoWidth: true,
  items: 4
});
