// traer todas las preguntas
plugdo.collector("getAllQuestions", {
  type: "db",
  action: "mysql",
  server: {
    user: "pluggerdemo",
    password: "pluggerdemo",
    host: "pluggerdemo.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
    database: "transiciones"
  },
  queryType: "stored-procedure",
  query: "call SP_GetQuestionary",
  parameter: []
});

// traer 1 sola pregunta
plugdo.collector("getOneQuestion", {
  type: "db",
  action: "mysql",
  server: {
    user: "loginName",
    password: "$loginName",
    host: "xxxxx.us-west-2.rds.amazonaws.com",
    database: "plugdo"
  },
  queryType: "text",
  query: "select * from audit_integrations",
  parameter: []
});

//Insertar respuesta de una pregunta de un usuario
plugdo.collector("insertUserAnswer", {
  type: "db",
  action: "mysql",
  server: {
    user: "loginName",
    password: "$loginName",
    host: "xxxxx.us-west-2.rds.amazonaws.com",
    database: "plugdo"
  },
  queryType: "text",
  query: "select * from audit_integrations",
  parameter: []
});

//Actualizar la respuesta de una pregunta de un usuario
plugdo.collector("updateUserAnswer", {
  type: "db",
  action: "mysql",
  server: {
    user: "loginName",
    password: "$loginName",
    host: "xxxxx.us-west-2.rds.amazonaws.com",
    database: "plugdo"
  },
  queryType: "text",
  query: "select * from audit_integrations",
  parameter: []
});

// Borrar respuesta de una pregunta de un usuario *

plugdo.collector("deleteUserAnswer", {
  type: "db",
  action: "mysql",
  server: {
    user: "loginName",
    password: "$loginName",
    host: "xxxxx.us-west-2.rds.amazonaws.com",
    database: "plugdo"
  },
  queryType: "text",
  query: "select * from audit_integrations",
  parameter: []
});
