let { view, cookie, request } = plugdo;
var id;
$(document).ready(function () {
    view.load();
    request.get("/api/apl/get/json", {} ,function (data, status) {
        var response = data.response.data;
        view.setData("forma", response);
    });

    request.get("/api/userId/get/json", {}, function (idUser, err) {
        id = idUser.response;
    });
//Funcion para obtener el valor de la opcion seleccionada.
// $("input[name=radio]").click(function () {
//     var opcion = $("input[name=radio]:checked");
//     var valor = opcion.val();
//     var id = opcion.attr("data-id");
//     //if para ir a la siguiente pregunta
//     console.log("opcion2: " + valor + " / de la pregunta: " + id);
// });
 
}); 

   function actualizarDatos(op) {
       var valor = op.value;
       var opId = op.getAttribute("data-id");
       console.log("usuario: " + id + " opcion2: " + valor + " / de la pregunta: " + opId);
       var data = {
           userID = id,
           option = valor,
           question = opId
       }
    //    request.post("/api/userAnswer/post/json", data, function (response, err) {
    //        if (err !== undifined) {
    //            console.log(err);
    //        }
    //        console.log(response);
    //    })
}
    