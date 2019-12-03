
var CryptoJS = require("crypto-js");
const uuidv1 = require('uuid/v1');

function SignIn() {
    this.verifyUser = function (datas, send) {
         plugdo.collect("verifyUser").get(datas, (data, err) => {
           if (err !== undefined) {
             // End the current request if a error exists
               send({},err);
           } else {
             var table = data.Database[0].Table.Row[0]; 
             console.log(table)
             var nombre = table.cad_nombre + table.cad_apellido;
             var id = table.cad_id;
             var uuid = uuidv1(); 
             
             var ciphertext = CryptoJS.AES.encrypt(uuid + nombre + id + "127.0.0.1", 'adfn2.!1DOS3siji5zklho!@');
             console.log(ciphertext);
             send(table);
           }
         });
    }
}

mvc.dependencies.verifyUser = new SignIn();
