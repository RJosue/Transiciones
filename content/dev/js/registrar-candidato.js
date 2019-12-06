//METER ESA VAINA EN UN FUNTION

$(document).ready(function() {
  let { binder } = plugdo;
  binder();
  $("#errorUsuario").hide();
  $("#errorNombre").hide();
  $("#errorConfirContraseña").hide();
  $("#errorApellido").hide();
  $("#errorFech").hide();
  $("#errorSexo").hide();
  $('#errorPuesto').hide();
  $('#errorCorreo').hide();
  $("#errorNivel").hide();

  $("#btnCrear").click(function(e) {
    e.preventDefault();
    validacion();
  });
});
//          LLAMADO A LAS FUNCIONES QUE VALIDAN
$("#contraseña").keyup(function () {
    contraseñaTiempoReal()
})
$("#confirmarContra").keyup(function(){
    contraseñaConfirTiempoReal()
})
$("#usuario").focusout(function(){
    valUsuario();
  });
$("#nombre").focusout(function () {
    valNombre();
});

$("#apellido").focusout(function () {
    valApellido();
})
$("#contraseña").focusout(function () {
    valContraseña();
})
$("#confirmarContra").focusout(function () {
    valContraseña();
})
$("#fechanacimineto").focusout(function () {
    valFecha();
})
$("#escoSexo").focusout(function () {
    valSexo();
})
$("#puesto").focusout(function () {
    valPuesto();
})
$("#correo").focusout(function () {
    valCorreo();
})

//      FUNCIONES QUE VALIDAN LOS CAMPOS
function contraseñaTiempoReal() {
    var confirContraseña = requestForm.CconfirmarContra.value;
    var contraseña = requestForm.Ccontraseña.value;
    if(contraseña!== confirContraseña){
        $("#contraseña").focus();
        $("#errorConfirContraseña").show();
        $("#errorConfirContraseña").css("color","red");
        $("#errorConfirContraseña").html(function () {
            return "Las contraseñas deben coincidir."
        })
        console.log("1");
        return false;
    }else{
        $("#errorConfirContraseña").hide();
        console.log("true")
        return true;
    }
}
function contraseñaConfirTiempoReal() {
    var confirContraseña = requestForm.CconfirmarContra.value;
    var contraseña = requestForm.Ccontraseña.value;
    if(confirContraseña!==contraseña){
        $("#confirmarContra").focus();
        $("#errorConfirContraseña").show();
        $("#errorConfirContraseña").css("color","red");
        $("#errorConfirContraseña").html(function () {
            return "Las contraseñas deben coincidir."
        })
        console.log("2");
        return false;
    }else{
        $("#errorConfirContraseña").hide();
        console.log("true")
        return true;
    }
}

  function valUsuario() {
    var usuario = requestForm.Cusuario.value;

    if(usuario!==""){
        $("#errorUsuario").hide();
        console.log("true")
        return true;
    }else{
        $("#usuario").focus();
        $("#errorUsuario").show();
        $("#errorUsuario").css("color","red")
        $('#errorUsuario').html(function(){
            return "Inserte un usuario valido."
        })
        console.log("3");
        return false;
    }
  }

  function valNombre() {
      var nombre = requestForm.Cname.value;
      if(/^[a-zA-Z\s]*$/.test(nombre)&&nombre!==""){
          $("#errorNombre").hide();
          console.log("true")
          return true;
      }else{
          $("#nombre").focus();
          $("#errorNombre").show();
          $("#errorNombre").css("color","red");
          $("#errorNombre").html(function () {
              return("Inserte un nombre valido");
          })
          console.log("4");
          return false;
      }
  }

  function valApellido() {
      var apellido = requestForm.Capellido.value;
      if(/^[a-zA-Z\s]*$/.test(apellido)&& apellido!==""){
          $("#errorApellido").hide();
          console.log("true")
          return true;
      }else{
        $("#apellido").focus();
        $("#errorApellido").show();
        $("#errorApellido").css("color","red");
        $("#errorApellido").html(function () {
            return("Inserte un apellido valido");
        })
        console.log("5");
        return false;
      }
  }

  function valContraseña() {
      var contraseña = requestForm.Ccontraseña.value;
      if(/(?=.*[a-z])(?=.*[A-Z]){6,30}/.test(contraseña)){
        $("#errorConfirContraseña").hide();
        if(contraseñaTiempoReal()&& contraseñaConfirTiempoReal()){
            console.log("true")
            return true;
        }else{
            console.log("6");
            return false;
        }
      }else{
        $("#contraseña").focus();
        $("#errorConfirContraseña").show();
        $("#errorConfirContraseña").css("color","red");
        $("#errorConfirContraseña").html(function () {
            return('La contraseña que está tratando de introducir no es válida. "Su contraseña debe contener un mínimo de 6 caracteres, una letra en mayúscula y una letra en minúscula"');
        })
        console.log("7");
        return false;
      }  
  }

  function valFecha() {
    var fecha = requestForm.Cfechanacimineto.value;
    if(fecha!==""){
        $("#errorFech").hide();
        console.log("true")
        return true;
      }else{
        $("#fechanacimineto").focus();
        $("#errorFech").show();
        $("#errorFech").css("color","red");
        $("#errorFech").html(function () {
            return("Introduzca una fecha valida.");
        })
        console.log("8");
        return false;
      }  
  }
  function valSexo() {
    var sexo = requestForm.CescoSexo.value;
    if(sexo!==""){
        $("#errorSexo").hide();
        console.log("true")
        return true;
      }else{
        $("#escoSexo").focus();
        $("#errorSexo").show();
        $("#errorSexo").css("color","red");
        $("#errorSexo").html(function () {
            return("Introduzca su sexo.");
        })
        console.log("9")
        return false;
      }  
  }
  function valPuesto() {
    var puesto = requestForm.Cpuesto.value;
    if(/^[a-zA-Z\s]*$/.test(puesto)&& puesto!==""){
        $("#errorPuesto").hide();
        console.log("true")
        return true;
    }else{
      $("#puesto").focus();
      $("#errorPuesto").show();
      $("#errorPuesto").css("color","red");
      $("#errorPuesto").html(function () {
          return("Inserte un Puesto valido");
      })
      console.log("10")
      return false;
    }
}
    function valCorreo() {
        var Email = requestForm.Ccorreo.value;
        if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(Email) && Email !== '') {
          $("#errorCorreo").hide();
          console.log("true")
          return true;
        }else {
            $("#correo").focus();
            $("#errorCorreo").show();
            $("#errorCorreo").css("color","red");
            $("#errorCorreo").html(function () {
                return("Inserte un correo valido.");
            })
            console.log("11");
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

//VALIDACIÓN PARA EVITAR USUARIOS REPETIDOS
function validarUsuario() {
    var model = {
      usuario: requestForm.Cusuario.value
    };
    request.get("/api/registrar/candidato/json", model,function (data) {
        var response = data.response[0][0]._exist;
        if(response === 0){
            alert("efkjdndjf");
            cargarDatos();
        }
        else{
            $("#usuario").focus();
            $("#errorUsuario").show();
            $("#errorUsuario").css("color","red");
            $("#errorUsuario").html(function () {
                return("Ya existe un usuario con este registro");
            })
        }
    },function (err) {
        alert(err);
    });
}

//ENVIO DE DATOS VALIDADOS

function validacion() {
    if(valUsuario()&&valNombre()&&valApellido()&&valContraseña()&&valContraseña()&&valFecha()&&valSexo()&&valPuesto()&&valCorreo()&&valNivel()){
        validarUsuario();
    }
  }

  function cargarDatos() {
    var model = {
        "usuario": requestForm.Cusuario.value,
        "nombre": requestForm.Cname.value,
        "apellido": requestForm.Capellido.value,
        "sexo": requestForm.CescoSexo.value,
        "puesto": requestForm.Cpuesto.value,
        "email": requestForm.Ccorreo.value,
        "fechaNacimiento": requestForm.Cfechanacimineto.value,
        "referencia": requestForm.Creferencia.value,
        "genero": requestForm.Cgenero.value,
        "nivelAcademico": requestForm.CnivelAcademico.value,
        "contraseña": requestForm.Ccontraseña.value
    };
    request.post("/api/registrar/candidato/json",model,function (data) {
        alert("Usuario guardado correctamente.");
    },function (err) {
        alert(err);
    })
  }
