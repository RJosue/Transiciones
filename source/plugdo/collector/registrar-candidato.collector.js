plugdo.collector("verificarUsuario", {
    type: "db",
    action: "mysql",
    server: {
      user: "pluggerdemo",
      password: "pluggerdemo",
      host: "pluggerdemo.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
      database: "transiciones"
    },
    queryType: "stored-procedure",
    query: "call SP_chekUser",
    parameter: ["json:usuario"]
  });

  plugdo.collector("actualizarCandidato", {
    type: "db",
    action: "mysql",
    server: {
      user: "pluggerdemo",
      password: "pluggerdemo",
      host: "pluggerdemo.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
      database: "transiciones"
    },
    queryType: "stored-procedure",
    query: "call SP_updateCandidate",
    parameter: ["json:nombre","json:apellido","json:email","json:fechaNacimiento","json:referencia","json:nivelAcademico","json:sexo","json:genero","json:puesto","json:usuario","json:contraseña","6"]
  });