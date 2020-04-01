import welcome from "./config/welcome";
import * as jsonServer from "json-server";
import * as mockupData from "./data";
import * as auth from "json-server-auth";
import * as dotenv from "dotenv";
import customRoutes from "./config/customRoutes";

const server = jsonServer.create();
const routerData = jsonServer.router(mockupData);
const middlewares = jsonServer.defaults();

const routerAuth = jsonServer.router("./db/db.json");

dotenv.config();

// @ts-ignore
server.db = routerAuth.db;

server.use(auth);

server.use(jsonServer.rewriter(customRoutes));
server.use(middlewares);

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 1234;

server.use(routerAuth);
server.use(routerData);

server.listen(port, () => {
  console.log(welcome(port));
});
