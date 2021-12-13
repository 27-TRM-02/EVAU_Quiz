function volver() {
    $('#principal').load('app.php');
}
var progreso;
var segundo = 0;
iniciaTemporizador();

//calculo un numero aleatorio
var numeroPregunta = calculaNumeroPregunta();
//dibujo los textos en los botones correspondientes
sigue();


function sigue() {
    $("[id*='resp']").removeClass("btn-dark").removeClass("btn-secondary").removeClass("btn-danger").addClass("btn-success");
    iniciaTemporizador();
    numeroPregunta = calculaNumeroPregunta();
    $('#enunciado').text(listaPreguntas[numeroPregunta][1]);
    $("[id*='resp']").prop("onclick", null).off("click");
    $('#resp1').text(listaPreguntas[numeroPregunta][2]).click(function(e) {
        cambiaPregunta(e, 1);
    });
    $('#resp2').text(listaPreguntas[numeroPregunta][3]).click(function(e) {
        cambiaPregunta(e, 2);
    });
    $('#resp3').text(listaPreguntas[numeroPregunta][4]).click(function(e) {
        cambiaPregunta(e, 3);
    });
    $('#resp4').text(listaPreguntas[numeroPregunta][5]).click(function(e) {
        cambiaPregunta(e, 4);
    });
}

function cambiaPregunta(e, num) {
    e.stopImmediatePropagation();
    var correcta = listaPreguntas[numeroPregunta][6];
    //deshabilita los clicks en los botones
    $("[id*='resp']").prop("onclick", null).off("click");
    //agrega el click al boton que se ha pulsado, para seguir la partida
    $("#resp" + num).click(function(e) {
        e.stopImmediatePropagation();
        sigue();
    });
    detieneTemporizador();
    if (num == correcta) {
        //cambia a gris las respuestas incorrectas   
        $("[id*='resp']").removeClass("btn-success").addClass("btn-secondary");
        //, y a verde la correcta 
        $("#resp" + num).removeClass("btn-danger").addClass("btn-success");
        $("#resp" + num).append("   CORRECTO! pulsa para seguir");
    } else {
        $("[id*='resp']").removeClass("btn-success").addClass("btn-danger");
        $("#resp" + num).removeClass("btn-danger").addClass("btn-dark").append("   INCORRECTO! pulsa para seguir");
        $("#resp" + correcta).removeClass("btn-danger").addClass("btn-success");
    }
}


function detieneTemporizador() {
    clearInterval(progreso);
}

function iniciaTemporizador() {
    //temporizador de la barra
    segundo = 0;
    $("#tiempo").width(0).text("");
    clearInterval(progreso);
    progreso = setInterval(function() {
        var caja = $("#cajatiempo");
        var tiempo = $("#tiempo");
        // Inicia el temporizador
        if (tiempo.width() >= caja.width()) {
            clearInterval(progreso);
            segundo = 0;
        } else { // Ha pasado una fase tiempo (de 10)
            tiempo.width(tiempo.width() + caja.width() / 10);
            segundo++;
        }
        //cambia el color de la barra dependiendo del segundo en que está
        if (segundo < 5) {
            tiempo.removeClass("bg-warning").removeClass("bg-danger").addClass("bg-success");
        } else if (segundo < 8) {
            tiempo.removeClass("bg-success").addClass("bg-warning");
        } else if (segundo >= 10) {
            let rightAnswer = $(`#resp${listaPreguntas[numeroPregunta][6]}`);
            $("[id*='resp']").not(rightAnswer).removeClass("btn-success").addClass("btn-danger").append("   INCORRECTO! se acabó el tiempo.").off("click");
            rightAnswer.removeClass("btn-danger").addClass("btn-success").append("   ESTA ERA LA CORRECTA! pulsa para seguir").off("click").click(function() {
                sigue();
            });
        } else {
            tiempo.removeClass("bg-warning").addClass("bg-danger");
        }
        tiempo.text(segundo);
    }, 1000);

}


function calculaNumeroPregunta() {
    return Math.floor(Math.random() * listaPreguntas.length);
}