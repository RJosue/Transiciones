
let {  binder } = plugdo;
binder();
function CargarDatos() {
    var model = {
        "nombre": resquestForm.Cname.value,
        "apellido": resquestForm.Capellido.value,
        "sexo": resquestForm.CescoSexo.value,
        "puesto": resquestForm.Cpuesto.value,
        "email": resquestForm.Ccorreo.value,
        "fechaNacimiento": resquestForm.CfechaNacimiento.value,
        "referencia": resquestForm.Creferencia.value,
        "genero": resquestForm.Cgenero.value,
        "nivelAcademico": resquestForm.CnivelAcademico.value
    };

        if(nombre!=""&& apellido!=""&& sexo!=""&&puesto!=""&email!=""&& fechaNacimiento!=""&&genero!=""){ 
            request.post("/api/registro/candidato/json", model, function (data) {

                alert(JSON.stringify(data));

            }, function (err) {
                alert(err);
            });
          

        }
    }

$(document).ready(function () {
    $("#btnCrear").click(function (e) {
        e.preventDefault();

        var messagedata = requestForm.CescoSexo.value;
        console.log(messagedata);
        CargarDatos();
    });
});