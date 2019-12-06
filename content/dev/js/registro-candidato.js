$(document).ready(function () {
    let { binder } = plugdo;
    binder();
    $("#errorNombre").hide();
    $("#errorApellido").hide();
    $("#errorSexo").hide();
    $("#errorCorreo").hide();
    $("#errorNivel").hide();
    $("#btnCrear").click(function (e) {
        e.preventDefault();
        CargarDatos();
    });
});

$("#nombre").focusout(function () {
    valNombre();
});

$("#apellido").focusout(function () {
    valApellido();
});

$("#escoSexo").focusout(function () {
    valSexo();
});

$("#correo").focusout(function () {
    valCorreo();
});

// VALIDACIONES DE LOS INPUTS

function valNombre() {
    var nombre = requestForm.Cname.value;
    if (nombre !== "") {
        $("#errorNombre").hide();
        return true;
    } else {
        $("#nombre").focus();
        $("#errorNombre").show();
        $("#errorNombre").css("color", "red");
        $("#errorNombre").html(function () {
            return ("Inserte un nombre valido");
        })
        return false;
    }
}

function valApellido() {
    var apellido = requestForm.Capellido.value;
    if (apellido !== "") {
        $("#errorApellido").hide();
        return true;
    } else {
        $("#apellido").focus();
        $("#errorApellido").show();
        $("#errorApellido").css("color", "red");
        $("#errorApellido").html(function () {
            return ("Inserte un apellido valido");
        })
        return false;
    }
}
function valSexo() {
    var sexo = requestForm.CescoSexo.value;
    if (sexo !== "") {
        $("#errorSexo").hide();
        return true;
    } else {
        $("#escoSexo").focus();
        $("#errorSexo").show();
        $("#errorSexo").css("color", "red");
        $("#errorSexo").html(function () {
            return ("Introduzca su sexo.");
        })
        return false;
    }
}

function valCorreo() {
    var Email = requestForm.Ccorreo.value;
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(Email) && Email !== '') {
        $("#errorCorreo").hide();
        return true;
    } else {
        $("#correo").focus();
        $("#errorCorreo").show();
        $("#errorCorreo").css("color", "red");
        $("#errorCorreo").html(function () {
            return ("Inserte un correo valido.");
        })
        return false;
    }
}
function valNivel() {
    var nivel = requestForm.CnivelAcademico.value;
    if ( nivel !== '') {
        $("#errorNivel").hide();
        return true;
    } else {
        $("#nivelAcademico").focus();
        $("#errorNivel").show();
        $("#errorNivel").css("color", "red");
        $("#errorNivel").html(function () {
            return ("Seleccione un opcion.");
        })
        return false;
    }
}

function CargarDatos() {

    if (valNombre() && valApellido() && valSexo() && valCorreo()&&valNivel()) {
        var model = {
            "nombre": requestForm.Cname.value,
            "apellido": requestForm.Capellido.value,
            "sexo": requestForm.CescoSexo.value,
            "puesto": requestForm.Cpuesto.value,
            "email": requestForm.Ccorreo.value,
            "fechaNacimiento": requestForm.Cfechanacimineto.value,
            "referencia": requestForm.Creferencia.value,
            "genero": requestForm.Cgenero.value,
            "nivelAcademico": requestForm.CnivelAcademico.value
        };

        request.post("/api/registro/candidato/json",model,function (data) {
                if(data.response.success=== undefined){
                    alert("Participante creado correctamente.")
                }
                else{
                    alert("Error: No se puedo añardir el participante.")
                }
            },
            function (err) {
                alert(err);
            }
        );
    }
}