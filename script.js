"use strict";
$(document).ready(() => {
  // 1.Hero section animation
  const hero = $(".section.hero");

  const original = {
    width: hero.width(),
    height: hero.height(),
    top: hero.offset().top,
    left: hero.offset().left,
    position: hero.css("position"),
    zIndex: hero.css("z-index"),
    marginLeft: hero.css("margin-left"),
  };

  hero.css({
    position: "fixed",
    top: original.top,
    left: original.left,
    marginLeft: 0,
    zIndex: 1000,
  });

  // Animate to full screen for 3 seconds, then back to original size and position
  hero.animate(
    {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
    },
    0,
    () => {
      setTimeout(() => {
        hero.animate(
          {
            // top: original.top,
            left: original.left,
            width: original.width,
            height: original.height,
          },
          1000,
          () => {
            hero.css({
              position: original.position,
              zIndex: original.zIndex,
              marginLeft: originalMarginLeft,
            });
          }
        );
      }, 3000);
    }
  );

  // 2.Navigation menu
  $("#navigationMenu h2").click((evt) => {
    const h2 = evt.currentTarget;

    $(h2).toggleClass("minus");

    if ($(h2).attr("class") !== "minus") {
      $(h2).next().stop(true, true).slideUp(1000, "easeInBounce");
    } else {
      $(h2).next().stop(true, true).slideDown(1000, "easeOutBounce");
    }

    evt.preventDefault();
  });

  // 3.Smooth scrolling
  $("#navigationMenu a").click((evt) => {
    evt.preventDefault();
    const target = $(evt.currentTarget).attr("href");
    const position = $(target).offset().top;

    $("html, body").animate({ scrollTop: position }, 800, "swing");
  });

  // 4.Product section
  // Click effect for product images
  $(".kit-item").click((evt) => {
    $(evt.currentTarget).find("img").fadeToggle(500);
  });

  // Hover effect for product descriptions
  $(".kit-item").hover(
    (evt) => {
      $(evt.currentTarget)
        .find(".kit-description")
        .stop(true, true)
        .fadeIn(400);
    },
    (evt) => {
      $(evt.currentTarget)
        .find(".kit-description")
        .stop(true, true)
        .fadeOut(400);
    }
  );

  // 5.FAQ section
  $("#faqs h3").click((evt) => {
    const h3 = evt.currentTarget;

    $(h3).toggleClass("minus");

    if ($(h3).attr("class") != "minus") {
      $(h3).next().stop(true, true).slideUp(1000, "easeInBounce");
    } else {
      $(h3).next().stop(true, true).slideDown(1000, "easeOutBounce");
    }

    evt.preventDefault();
  });
});
