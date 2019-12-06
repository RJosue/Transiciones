plugdo.collector("validateToken", {
    type: "db",
    action: "mysql",
    server: {
        user: "pluggerdemo",
        password: "pluggerdemo",
        host: "pluggerdemo.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
        database: "transiciones"
    },
    queryType: "stored-procedure",
    query: "call SP_sessionExist",
    parameter: ["json:idUser", "json:rol", "json:guid", "json:ip"] //Envio como parametro
});
