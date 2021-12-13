var _vidas = 3;

function sigue(_tema) {
  switch (_tema) {
    case "1":
      $("#menu").load("juego.php", {
        vidas: _vidas,
        correctas: 0,
        tema: "Historia",
      });
      break;
    case "2":
      $("#menu").load("juego.php", {
        vidas: _vidas,
        correctas: 0,
        tema: "Economia",
      });
      break;
    case "3":
      $("#menu").load("juego.php", {
        vidas: _vidas,
        correctas: 0,
        tema: "Filosofia",
      });
      break;
    case "4":
      $("#menu").load("juego.php", {
        vidas: _vidas,
        correctas: 0,
        tema: "Lengua",
      });
      break;
    case "5":
      $("#menu").load("juego.php", {
        vidas: _vidas,
        correctas: 0,
        tema: "Ingles",
      });
      break;
  }
}

function muestraModalPrueba() {
  $("#modalPrueba").modal("show");
}
