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

plugdo.collector("insertToken", {
  type: "db",
  action: "mysql",
  server: {
    user: "pluggerdemo",
    password: "pluggerdemo",
    host: "pluggerdemo.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
    database: "transiciones"
  },
  queryType: "stored-procedure",
  query: "call SP_LoginToken",
  parameter: ["json:token"] //Envio como parametro
});
