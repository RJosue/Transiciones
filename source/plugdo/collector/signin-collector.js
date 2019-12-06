plugdo.collector("verifyUser", {
  type: "db",
  action: "mysql",
  server: {
    user: "pluggerdemo",
    password: "pluggerdemo",
    host: "pluggerdemo.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
    database: "transiciones"
  },
  queryType: "stored-procedure",
  query: "call SP_Login" ,
  parameter: ["json:user", "json:password"] //Envio como parametro
});

plugdo.collector("session", {
  type: "db",
  action: "mysql",
  server: {
    user: "pluggerdemo",
    password: "pluggerdemo",
    host: "pluggerdemo.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
    database: "transiciones"
  },
  queryType: "stored-procedure",
  query: "call SP_session",
  parameter: ["json:guid", "json:idUser", "json:rol", "json:ip"] //Envio como parametro
});
