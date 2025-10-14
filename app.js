"use strict";
$(document).ready(() => {
  // 1.Hero section animation
  const hero = $(".section.hero");

  // Store original dimensions and position
  const original = {
    width: hero.width(),
    height: hero.height(),
    top: hero.offset().top,
    left: hero.offset().left,
    position: hero.css("position"),
    zIndex: hero.css("z-index"),
    marginLeft: hero.css("margin-left"),
  };

  // Set to fixed position and full screen initially
  hero.css({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    marginLeft: 0,
    zIndex: 1000,
  });

  // Custom Animations: Animate to full screen for 3 seconds, then back to original size and position
  function resetHero() {
    hero.animate(
      {
        left: original.left,
        width: original.width,
        height: original.height,
      },
      1000,
      () => {
        hero.css({
          position: original.position,
          zIndex: original.zIndex,
          marginLeft: original.marginLeft,
        });
      }
    );
  }

  setTimeout(resetHero, 3000);

  // 2.Navigation menu
  function toggleMenu(evt) {
    const h2 = evt.currentTarget;

    $(h2).toggleClass("minus");

    if (!$(h2).hasClass("minus")) {
      $(h2).next().stop(true, true).slideUp(1000, "easeInBounce");
    } else {
      $(h2).next().stop(true, true).slideDown(1000, "easeOutBounce");
    }
  }

  $("#navigationMenu h2").click(toggleMenu);

  function smoothScroll(evt) {
    evt.preventDefault();
    const target =
      $(evt.currentTarget).attr("href") || $(evt.currentTarget).data("target");
    const position = $(target).offset().top;

    $("html, body").animate({ scrollTop: position }, 800, "swing");
  }

  $("#navigationMenu a, #startButton").click(smoothScroll);

  // 3.Learn Section
  const cards = $(".learn-card");
  let index = 0;
  let interval;

  // Initialize first card
  cards.eq(index).addClass("active").css({ opacity: 1 });

  // Function to show the next card with fade effect
  function showNextCard() {
    const current = cards.eq(index);
    index = (index + 1) % cards.length;
    const next = cards.eq(index);

    current.fadeOut(600, function () {
      current.removeClass("active");
      next.fadeIn(600).addClass("active");
    });
  }

  function startCarousel() {
    interval = setInterval(showNextCard, 3000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  $(".learn-carousel").hover(stopCarousel, startCarousel);

  startCarousel();

  // 4.Product Gallery
  // Click effect for product images
  function toggleGallery(evt) {
    $(evt.currentTarget).find("img").fadeToggle(500);
  }

  $(".kit-item").click(toggleGallery);

  // Hover effect for product descriptions
  function showDescription(evt) {
    $(evt.currentTarget).find(".kit-description").stop(true, true).fadeIn(400);
  }

  function hideDescription(evt) {
    $(evt.currentTarget).find(".kit-description").stop(true, true).fadeOut(400);
  }

  $(".kit-item").hover(showDescription, hideDescription);

  // 5.FAQ section
  function toggleFaq(evt) {
    const h3 = evt.currentTarget;

    $(h3).toggleClass("minus");

    if (!$(h3).hasClass("minus")) {
      $(h3).next().stop(true, true).slideUp(1000, "easeInBounce");
    } else {
      $(h3).next().stop(true, true).slideDown(1000, "easeOutBounce");
    }

    evt.preventDefault();
  }

  $("#faqs h3").click(toggleFaq);
});
