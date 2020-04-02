import welcome from "./config/welcome";
import * as jsonServer from "json-server";
import * as mockupData from "./data";
import * as auth from "json-server-auth";
import * as dotenv from "dotenv";
import * as users from "./db/db.json";
import customRoutes from "./config/customRoutes";

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const endpoints: any = Object.assign({}, mockupData, users);
const router = jsonServer.router(endpoints);

dotenv.config();

// @ts-ignore
server.db = router.db;


server.use(jsonServer.rewriter(customRoutes));
server.use(middlewares);
server.use(auth);

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 1234;
server.use(router);

server.listen(port, () => {
  console.log(welcome(port));
});
