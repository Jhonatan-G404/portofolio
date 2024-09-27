document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typeText", {
    strings: ["Web Developer"],
    speed: 150,
    breakDelay: 3000,
    loop: true,
  })
    .pause(2000)
    .delete()
    .type("UI/UX Design")
    .pause(2000)
    .delete()
    .type("Full-Stack Engineer")
    .pause(2000)
    .delete()
    .go();
});
