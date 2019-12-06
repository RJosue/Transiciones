let { request, cookie } = plugdo;

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
            if (data.response.success) {
                cookie.set("token", data.response.token, 1);
                alert("Has iniciado sessión correctamente.");
                window.location.href = "http://localhost:3000/apl-test"
            } else {
                alert("Usuario o contraseña incorrecto, intentelo nuevamente!");
                console.log(data.response.error);
            }
        });
    }
});