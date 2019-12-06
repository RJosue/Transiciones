
var CryptoJS = require("crypto-js");
const uuidv1 = require('uuid/v1');
function SignIn() {
  this.signIn = async function (req) {
    var response = {
      success: true,
      error: "",
      errorCode: 0,
      token: "",
      nombre: "",
      idUser: ""
    }
    var table = await this.spVerifyUser(req.body);
    if (table.success) {
      var acces_token = setDataAccess(table, req);
      var table2 = await this.spSession(acces_token);
      if (table2.success) {
        var token = generateToken(acces_token);
        response.token = token.toString();
        // response.nombre = table.can_nombre + " " + table.can_apellido;
        // console.log(table.can_nombre + " " + table.can_apellido);
        return response;
      } else {
        response.success = false,
          response.error = table2.error
        return response
      }
    }
    else {
      response.success = false,
        response.error = table.error
      return response;
    }
  }

  this.spVerifyUser = function (signInInfo) { //Primer collector
    return new Promise((resolve) => {
      var response = {
        success: true,
        error: "",
        errorCode: 0,
        data: {}
      }
      plugdo.collect("verifyUser").get(signInInfo, (data, err) => {
        if (err) {
          response.success = false,
            response.error = "Error en el spSignIn"
          resolve(response);
        } else {
          if (data.Database[0].Table.Row[0][0]._message === 0) {
            response.success = false,
              response.error = "Error el usuario no existe."
            resolve(response);
          } else {
            response.data = data.Database[0].Table.Row[0];
            resolve(response);
          }
        }
      });
    });
  }

  this.spSession = function (signInInfo) { //Segundo collector
    return new Promise((resolve) => {
      var response = {
        success: true,
        error: "",
        errorCode: 0,
        data: {}
      }
      plugdo.collect("session").get(signInInfo, (data, err) => {
        if (err) {
          response.success = false,
            response.error = "Error en el spSession"
          resolve(response);
        } else {
          if (data.Database[0].Table.Row[0][0]._message === 0) {
            response.success = false,
              response.error = "Error el usuario no existe."
            resolve(response);
          } else {
            response.data = data.Database[0].Table.Row[0];
            resolve(response);
          }
        }
      });
    });
  }

  var generateToken = function (acces_token) { //Genero el token de la session
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(acces_token), 'adfn2.!1DOS3siji5zklho!@');
    return ciphertext.toString();
  }

  var setDataAccess = function (table, req) {//Establece la estructura del acces_token
    var data = {
      guid: uuidv1(),
      idUser: table.data[0].can_id,
      rol: table.data[0].can_rol,
      ip: req.plugdo.ip
    }
    return data;
  }

}
function Validate() {
  this.validateToken = async function (token) {
    var response = await this.spvalidateToken(this.decryptToken(token));
    return response.success;
  }

  this.spvalidateToken = function (token) {
    return new Promise((resolve) => {
      var response = {
        success: true,
        error: "",
        errorCode: 0,
        data: {}
      }
      plugdo.collect("validateToken").get(token, (data, err) => {
        if (err) {
           response.success = false,
            response.error = "Error en el spvalidateToken"
          resolve(response);
        } else {
          if (data.Database[0].Table.Row[0][0]._message !== 0) {
            resolve(response);
          } else {
              response.success = false,
              response.error = "Session invalida."
             resolve(response);
          }
        }
      });
    });
  }

  this.decryptToken = function (token) {
   var tokenSplit =  token.split("token=")[1];
    var bytes = CryptoJS.AES.decrypt(tokenSplit, 'adfn2.!1DOS3siji5zklho!@');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(plaintext);
  }

}

function userServices() {
  this.getUserId = function (token) {
    const  objetoValidate = new Validate();
    var returnId = objetoValidate.decryptToken(token);
    return returnId.idUser
  }
}

mvc.dependencies.singIn = new SignIn();
mvc.dependencies.validateUser = new Validate();
mvc.dependencies.userServices = new userServices();
