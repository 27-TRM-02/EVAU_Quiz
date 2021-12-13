<?php
//aqui no hace falta iniciar la sesión porque 
//este código se carga con require
// Hay que ponerlo porque se le llama desde juego.php en la función js 'volver()'.
session_start();
?>

<div id="menu" style="color:white; ">
  <p></p>
  <p><a class="btn btn-block btn-dark disabled"><?php echo $_SESSION['nombreUsuario'] ?>, demuestra que estás listo para la EVAU </a></p>
  <p><a id="sigue1" class="btn btn-block btn-primary" onclick="sigue('1')">HISTORIA</a></p>
  <p><a id="sigue2" class="btn btn-block btn-primary" onclick="sigue('2')">ECONOMIA</a></p>
  <p><a id="sigue3" class="btn btn-block btn-primary" onclick="sigue('3')">FILOSOFIA</a></p>
  <p><a id="sigue4" class="btn btn-block btn-primary" onclick="sigue('4')">LENGUA Y LITERATURA</a></p>
  <p><a id="sigue5" class="btn btn-block btn-primary" onclick="sigue('5')">INGLÉS</a></p>
</div>

<script src="js/app.js"></script>


<div id="modalPrueba" class="modal" tabindex="-1" role="dialog" style="color:#6c757d;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal de prueba</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Hola K Ase telekinesis o k ase</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Salvar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>


<?php
