// Source: https://blog.logrocket.com/typescript-with-node-js-and-express/

import express from "express";
import homeRoute from "./routes/home";

const app = express();
const PORT = process.env.PORT || 8080;
app.use("/", homeRoute);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
