const password = require('secure-random-password');
var randomUser = require('random-user');
function registroCandidato() {
    this.cargarDatos = async function (data) {
        
        var response ={
            error : "",
            errorCode: 0,
            data: {}
        }
        try {
            var result = await this.cargar(data);
            if(result.success){
                response.data = result.data;
            }
            else{
                response = result;
            }
        } catch (ex) {
            console.log(ex);
        }
        return response
    }

    this.cargar = function (data) {
        var usuario = this.randomPassword();
        var contraseña = this.randomPassword();
        var message ={
            nombre: data.nombre,
            apellido: data.apellido,
            sexo: data.sexo,
            puesto: data.puesto,
            email: data.email,
            fechaNacimiento: data.fechaNacimiento,
            referencia: data.referencia,
            genero: data.genero,
            nivelAcademico: data.nivelAcademico,
            usuario: usuario,
            contraseña : contraseña
        }
        return new Promise ((resolve)=>{
            plugdo.collect("registroCandidato").get(message, function (data, err) {
                var response = {
                    success: true,
                    error: "",
                    errorCode:0
                }
                if(err!=undefined){
                    response.error = err.message;
                    response.errorCode =500;
                    response.success = false;
                    resolve(response);
                }
                else{
                    response.data = data;
                    resolve(response);
                }
            })
        })
    }


    this.randomPassword = function () {
        return password.randomPassword({length:8,characters: [password.lower + password.upper + password.digits]});
    }
}
mvc.dependencies.registroCandidato = new registroCandidato();