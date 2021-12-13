$("#boton1").click(function () {
  //leo el contenido de las cajas de nombre y contraseña
  var _cajaNombre = $("#cajaNombre").val();
  var _cajaPassword = $("#cajaPassword").val();
  var _cajaPassword2 = $("#cajaPassword2").val();
  if (_cajaPassword != _cajaPassword2) {
    alert("LAS CONTRASEÑAS NO COINCIDEN");
  } else {
    $("#principal").load("registra.php", {
      cajaNombre: _cajaNombre,
      cajaPassword: _cajaPassword,
    });
  }
});
