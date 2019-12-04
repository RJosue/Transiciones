
var CryptoJS = require("crypto-js");
const uuidv1 = require('uuid/v1');
function SignIn() {
  this.verifyUser = function (req, send) {
    var table = [];
    var table2 = [];
    var response = [];
    plugdo.collect("verifyUser").get(req.body, (data, err) => {
      if (err) {
        send({}, err);
      } else {
        table = data.Database[0].Table.Row[0];
        if (table[0]._message === 0) {
          var ciphertext = "";
          response = table;
          response.push({ 'access': ciphertext.toString() });
        } else {
          var data_access = setDataAccess(table, req);
          plugdo.collect("accessUser").get(data_access, function (data2, err) {
            table2 = data2.Database[0].Table.Row[0][0];
            var ciphertext = CryptoJS.AES.encrypt(table2.guid + "," + table[0].id + "," + table2.ip, 'adfn2.!1DOS3siji5zklho!@');
            response = table;
            response.push({ 'access': ciphertext.toString() });
          })
        }
      }
      send(response);
    });
  }
}


mvc.dependencies.verifyUser = new SignIn();

var setDataAccess = function (table, req) {
  console.log(table)
  var data = {
    guid: uuidv1(),
    idUser: table[0].can_id,
    rol: table[0].can_rol,
    ip: req.header.ip
  }
  console.log(data)
  return data;
}