function CargarDatos() {
    var combo= document.getElementById("escoSexo");
    var combo1= document.getElementById("nivelAcademico");
    var model = {
        "nombre": $("#nombre").val(),
        "apellido": $("#apellido").val(),
        "sexo": combo.options[combo.selectedIndex].value,
        "puesto": $("#puesto").val(),
        "email": $("#correo").val(),
        "fechaNacimiento": $("#fechanacimineto").val(),
        "referencia": $("#referencia").val(),
        "genero": $("#genero").val(),
        "nivelAcademico": combo1.options[combo1.selectedIndex].value
    };

    //nombre!=""&& apellido!=""&& sexo!=""&&puesto!=""&email!=""&& fechaNacimiento!=""&&genero!=""
        request.post("/api/registro/candidato/json", model, function (data) {

            alert(JSON.stringify(data));

        }, function (err) {
            alert(err);
        });

}

$(document).ready(function () {
    $("#btnCrear").click(function (e) {
        e.preventDefault();

        CargarDatos();
    });
});