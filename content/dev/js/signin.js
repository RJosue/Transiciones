let { request } = plugdo;
$("#btnLogin").click(function (e) {
    e.preventDefault();
    var usuario = $("#user").val();
    var contra = $("#password").val();   
    if (user !== "" && password !== "") {
        var datos = {
            "user": usuario,
            "password": contra

        }
        request.post("/api/signin/get/json", datos, function (data) {
            if (data.response[0].can_nombre.length) {
                alert("Has iniciado sessión correctamente.");
                alert(JSON.stringify(datos));
                // window.location.href = "/apl-test";
            } else{
                alert("Usuario o contraseña incorrecto, intentelo nuevamente!");
            }
        });
    }
});

// request.get("api/apl/get/json", "", function (data) {
//     var datas = data.response.data;
//     console.log(datas);
//     view.setData("forma", datas);
// });

// $("#btnLogin").click(function() {
//   var user = $("#user").val();
//   var password = $("#password").val();
//     if (user !== "" && password !== "") {
//         request.get("/api/signin/get/json", {user, data}, function (data) {
//             if (data !== undifined) {
//                 window.location.href = "localhost:3000";
//             }
//         });
//     }
// });