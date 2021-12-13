// document ready se ejecuta cuando toda la página se ha cargado correctamente
$(document).ready(function () {
    //$('#cajaNombre').hide();
  });

  $.validate({
    lang: "es",
  });

  $("#boton1").click(function () {
    //leo el contenido de las cajas de nombre y contraseña
    var _cajaNombre = $("#cajaNombre").val();
    var _cajaPassword = $("#cajaPassword").val();

    $("#principal").load("login.php", {
      cajaNombre: _cajaNombre,
      cajaPassword: _cajaPassword,
    });
  });

  function registra() {
    $("#principal").load("registra.php");
  }