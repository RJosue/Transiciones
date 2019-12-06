var CryptoJS = require("crypto-js");
function registarCandidato() {
    this.validarUsuario =  async function (data) {

        var response = {
            error : "",
            errorCode : 0,
            data : {}
        }
        try {
            var result = await this.validacion(data);
            if(result.success){
                response.data = result.data
            }
            else{
                response = result;
            }
            
        } catch (ex) {
            console.log(ex)
        }
        return response.data.Database[0].Table.Row; 
    }

    this.cargarDatos = async function (data) {
        
        var response ={
            error: "",
            errorCode: 0,
            data: {}
        }
        try{
            var result = await this.Cargar(data);
            if(result.success){
                response.data = result.data;
            }else{
                response = result;
            }
        } catch (ex){
            console.log(ex)
        }
        return response;
    }

this.validacion = function (data) {
    var message = data;
    return new Promise ((resolve)=>{
        plugdo.collect("verificarUsuario").get(message, function(data, err) {
            var response = {
                success: true,
                error: "",
                errorCode:0,
                data: {}
            }
            if(err!== undefined){
                response.error = err.mesasage;
                response.errorCode = 500;
                response.success =false;

                resolve(response)
            }
            else{
                response.data = data;
                resolve(response);
            }
          });
    })
}

this.Cargar = function (data) {
    var contraseña = CryptoJS.AES.encrypt(data.contraseña, '123%¡seNoicisNart!%321');
    var message = {
        "usuario":data.usuario,
        "nombre":data.nombre,
        "apellido":data.apellido,
        "sexo": data.sexo,
        "puesto": data.puesto,
        "email": data.email,
        "fechaNacimiento": data.fechaNacimiento,
        "referencia": data.referencia,
        "genero": data.genero,
        "nivelAcademico": data.nivelAcademico,
        "contraseña": contraseña.toString()
    };
    return new Promise ((resolve)=>{
        plugdo.collect("actualizarCandidato").get(message, function(data, err) {
            var response = {
                success: true,
                error: "",
                errorCode:0,
                data: {}
            }
            if(err!== undefined){
                response.error = err.mesasage;
                response.errorCode = 500;
                response.success =false;

                resolve(response)
            }
            else{
                response.data = data;
                resolve(response);
            }
          });
    })
}
}

mvc.dependencies.registarCandidato = new registarCandidato(); 