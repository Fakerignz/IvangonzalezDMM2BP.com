const barraCarga = document.getElementById("barra-carga");

window.scrollTo(0, 0);

barraCarga.addEventListener("animationend", function () {
  document.body.classList.remove("cargando");
  document.body.classList.add("menu-activo");
});
