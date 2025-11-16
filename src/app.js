
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("gif-carga");

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      overlay.style.display = "flex";

      const href = this.href;

      setTimeout(() => {
        window.location.href = href;
      }, 1000);
    });
  });
});
