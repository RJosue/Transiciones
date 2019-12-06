// traer todas las preguntas
plugdo.collector("registroCandidato", {
    type: "db",
    action: "mysql",
    server: {
      user: "pluggerdemo",
      password: "pluggerdemo",
      host: "pluggerdemo.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
      database: "transiciones"
    },
    queryType: "stored-procedure",
    query: "call SP_registerCandidate",
    parameter: ["json:nombre","json:apellido","json:email","json:fechaNacimiento","json:referencia","json:nivelAcademico","json:sexo","json:genero","json:puesto","json:usuario","json:contraseña"]
  });