const jsonServer = require("json-server");
const path = require("path");

require("dotenv").config({ path: path.resolve(process.cwd(), "../.env") });

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const db = require("./db");
const middleware = jsonServer.defaults();

const port = process.env.MOCK_SERVER_PORT || 3002;

server.get("/api/users", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.jsonp({ items: db.users, success: true });
});

server.use(middleware);
server.use(router);
server.listen(port);
console.log(`Mock Server started: http://${"localhost"}:${port}`);
