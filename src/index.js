import app from "./app.mjs";
import { createAdminUser } from "./libs/createUser.js";
import "./database.js";
const app = require("./app.mjs");
async function main() {
  await createAdminUser();
  app.listen(app.get("port"));

  console.log("Server on port", app.get("port"));
  console.log("Environment:", process.env.NODE_ENV);
}

main();
