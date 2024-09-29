document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typeText", {
    speed: 150,
    breakDelay: 2500,
    loop: true,
  })
    .pause(4500)
    .type("Web Developer")
    .pause(2000)
    .delete()
    .type("UI/UX Design")
    .pause(2000)
    .delete()
    .type("Full-Stack Engineer")
    .pause(2000)
    .delete()
    .go();
  new TypeIt("#typeName", {
    speed: 50,
    breakDelay: 1000,
    afterComplete: function (instance) {
      instance.destroy();
    },
  })
    .type("jHONATAN")
    .pause(1000)
    .move(-7, { delay: 100 })
    .delete(1)
    .type("J")
    .move(7)
    .pause(800)
    .type(" GURITNO")
    .go();
});

document
  .getElementById("btnKirim")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    swal({
      title: "Kirim pesan",
      text: "Anda yakin ingin mengirim pesan ini?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willSend) => {
      if (willSend) {
        swal("Yeyy! Pesan anda berhasil Dikirim", {
          icon: "success",
        });
      } else {
        swal("Pesan Anda Dibatalkan");
      }
    });
  });
