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
