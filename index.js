const mvc = require("@dellasera/plugdo-server").server();
const path = require("path");
const port = process.env.PORT === undefined ? 3000 : process.env.PORT;

mvc.start(port, path.resolve(__dirname));